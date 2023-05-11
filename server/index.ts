import express from 'express';
import path from 'path';
import compression from 'compression';
import nodemailer from 'nodemailer';
import axios from 'axios';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import config from './config';

const DIST_DIR = path.join(__dirname, "..", "build"); // Client build dir
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});

const sendmailOptions: SMTPConnection.Options = {
    host: config.mailHost,
    auth: {
        user: config.mailUser,
        pass: config.mailPass,
    },
    secure: true,
}
const transporter = nodemailer.createTransport(sendmailOptions);

const sendFrom = "phil@mariphil.wedding";
const sendTo = "phil@code67.com";

const sleep = (ms: number) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(null);
        }, ms);
    })
}

app.post("/contact", async (req, res) => {
    // await sleep(1000);
    try {
        const body = req.body;
        // Validate body first
        const expected = ["formName", "formCompany", "formEmail", "formMessage", "formRecaptcha"];
        for (const field of expected) {
            if (!(field in body)) {
                throw new Error("Missing field: " + field);
            }
        }

        // Validate request using private key
        const verificationResult = await axios({
            url: "https://www.google.com/recaptcha/api/siteverify",
            method: "POST",
            data: {
                secret: config.recaptchaSecret,
                response: body.formRecaptcha,
                remoteip: req.headers['x-real-ip'],
            },
            timeout: 10 * 1000,
            validateStatus: () => true,
        });
        if (verificationResult.status !== 200) {
            throw new Error("Recaptcha token not verified. Status response: " + verificationResult.status);
        }

        // Just send me an email
        const result = await transporter.sendMail({
            from: sendFrom,
            to: sendTo,
            subject: "CV Website Enquiry",
            text: "Body follows\n" + JSON.stringify(req.body, null, 4),
        });
        if (result.accepted) {
            // OK
            res.send("OK");
        } else {
            throw new Error("Not accepted by mail server");
        }
    } catch(e: any) {
        console.error(e);
        res.status(500);
        res.send("Error: " + e.message);
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});

process.on("SIGINT", () => {
    process.exit(1);
});
process.on("SIGTERM", () => {
    process.exit(1);
});


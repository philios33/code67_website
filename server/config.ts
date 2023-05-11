
require('dotenv').config();

const requiredVars = ["MAIL_HOST", "MAIL_USER", "MAIL_PASS", "RECAPTCHA_SECRET"];
for (const reqVar of requiredVars) {
    if (typeof process.env[reqVar] === "undefined") {
        throw new Error("Please set env var: " + reqVar);
    }
}

const config = {
    mailHost: process.env["MAIL_HOST"] || "",
    mailUser: process.env["MAIL_USER"] || "",
    mailPass: process.env["MAIL_PASS"] || "",
    recaptchaSecret: process.env["RECAPTCHA_SECRET"] || "",
}

export default config;
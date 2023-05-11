import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export default function() {

    const [formName, setFormName] = useState("");
    const [formCompany, setFormCompany] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formMessage, setFormMessage] = useState("");

    const [formRecaptcha, setFormRecaptcha] = useState(null as string | null);

    const [showThanks, setShowThanks] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null as string | null);

    const updateFormValue = (id: string, value: string) => {
        if (id === "name") {
            setFormName(value);
        } else if (id === "company") {
            setFormCompany(value);
        } else if (id === "email") {
            setFormEmail(value);
        } else if (id === "message") {
            setFormMessage(value);
        } else {
            console.warn("Unknown id: " + id);
        }
    }

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();

        setError(null);
        setLoading(true);
        try {
            const data = {
                formName,
                formCompany,
                formEmail,
                formMessage,
                formRecaptcha
            }

            // console.log("Sending contact form", data);
            
            const result = await axios({
                url: "/contact",
                method: "POST",
                data: JSON.stringify(data),
                headers: {
                    "content-type": "application/json",
                },
                timeout: 10 * 1000,
                validateStatus: () => true,
            });
            if (result.status === 200) {
                setShowThanks(true);
            } else {
                throw new Error("Unexpected response status: " + result.status);
            }
        } catch(e: any) {
            console.error(e);
            setShowThanks(false);
            setError(e.message);
            setLoading(false);
        }

    }

    const onCaptureChange = (token: any) => {
        setFormRecaptcha(token);
    }
    const onCaptureExpired = () => {
        setFormRecaptcha(null);
    } 
    const onCaptureError = (e: any) => {
        setFormRecaptcha(null);
        alert(e.message);
        console.error("CAPTURE ERRORED", e);
    } 

    return <div id="content">
        <div id="right_content" className="contactForm">
            <h1>Contact</h1>
            
            {error !== null && 
                <p className="error">{error}</p>
            }
            
            {showThanks ? (
                <div>Thanks.  I will be in touch as soon as possible.</div>
            ) : (
                <form action="/contact" method="POST" onSubmit={(e) => submitForm(e)}>
                    <div>
                        <label htmlFor="formName">Name:</label> <input id="formName" name="name" value={formName} onChange={(e) => updateFormValue("name", e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="formCompany">Company:</label> <input id="formCompany" name="company" value={formCompany} onChange={(e) => updateFormValue("company", e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="formEmail">Return email:</label> <input id="formEmail" name="email" value={formEmail} onChange={(e) => updateFormValue("email", e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="formEnq">Message:</label>
                        <textarea id="formEnq" value={formMessage} onChange={(e) => updateFormValue("message", e.target.value)}></textarea>
                    </div>
                    <div>
                        <ReCAPTCHA sitekey="6LdpdvYlAAAAAM7I2g34bpr92jDxD-vC_aBSVfzp" theme="dark" size="normal" onChange={onCaptureChange} onExpired={onCaptureExpired} onError={onCaptureError} />
                        {isLoading ? (
                            <input className="sendButton disabled" disabled={true} type="submit" value="..." />
                        ) : (
                            <input className={formRecaptcha === null ? "sendButton disabled" : "sendButton enabled"} disabled={formRecaptcha === null} type="submit" value="Send" />
                        )}
                    </div>
                </form>
            )}
        </div>
    </div>
}
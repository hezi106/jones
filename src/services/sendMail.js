import emailjs from "emailjs-com";
import {
  EMAILJS_USER_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../constants";

const sendMail = async (values) => {
    try {
        const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, values, EMAILJS_USER_ID);
        console.log(`sendMail > success: ${result.text}`);
    } catch (err) {
        console.log(`sendMail > error: ${err.text}`);
    }
}

export default sendMail;
import { validateEmail } from "./validateEmail.js";

export const validateReqData = (data) => {
  const { email, subject, text } = data;

  if (!email || !validateEmail(email)) {
    return { error: "Email ERROR" };
  }
  if (!subject || subject.trim().length === 0) {
    return { error: "Subject ERROR" };
  }
  if (!text || text.trim().length === 0) {
    return { error: "Message ERROR" };
  }

  return null; // success
};

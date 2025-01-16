import axios from "axios";

export type EmailData = {
  email: string;
  subject: string;
  text: string;
};

export const sendEmail = async (
  data: EmailData
): Promise<{ text: string } | null> => {
  try {
    const response = await axios.post(
      "http://localhost:5000/send-email",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    console.error("ERROR", error);
    return null;
  }
};

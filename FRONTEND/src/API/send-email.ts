import axios from "axios";

const API_URL = "https://portfolio-api-2512.onrender.com";

export type EmailData = {
  email: string;
  subject: string;
  text: string;
};

export type EmailResponse = { text: string };

export const sendEmail = async (
  data: EmailData
): Promise<EmailResponse | null> => {
  try {
    const response = await axios.post<EmailResponse>(
      `${API_URL}/api/send-email`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: unknown) {
    console.log(error);

    return null;
  }
};

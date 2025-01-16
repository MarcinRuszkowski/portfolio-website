import { EmailData } from "@/API/send-email";

export const validateEmailData = (data: EmailData): string | null => {
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    return "Podaj poprawny adres e-mail.";
  }
  if (!data.subject) {
    return "Tytuł nie może być pusty.";
  }
  if (!data.text) {
    return "Treść wiadomości nie może być pusta.";
  }
  return null;
};

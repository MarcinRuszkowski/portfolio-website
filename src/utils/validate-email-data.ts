import { EmailData } from "@/API/send-email";

const text = {
  PL: {
    emailErr: "BŁĄD! Podaj poprawny adres e-mail.",
    subjectErr: "BŁĄD! Temat nie może być pusty.",
    textErr: "BŁĄD! Treść wiadomości nie może być pusta.",
  },
  EN: {
    emailErr: "ERROR! Enter correct e-mail address.",
    subjectErr: "ERROR! The subject cannot be empty.",
    textErr: "ERROR! The content of the message cannot be empty.",
  },
};

export const validateEmailData = (
  data: EmailData,
  currentLang: "PL" | "EN"
): string | null => {
  const currentText = text[currentLang];

  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    return currentText.emailErr;
  }
  if (!data.subject) {
    return currentText.subjectErr;
  }
  if (!data.text) {
    return currentText.textErr;
  }
  return null;
};

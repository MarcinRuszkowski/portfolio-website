import { useState } from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { sendEmail, EmailData } from "../API/send-email";
import { validateEmailData } from "@/utils/validate-email-data";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedButton } from "@/component/AnimatedButton";
import { FiChevronsRight } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const text = {
  PL: {
    header: "Kontakt",
    subject: "TEMAT",
    subjectPlaceholder: "Rekrutacja",
    text: "TREŚĆ WIADOMOŚCI",
    textPlaceholder: "Jesteśmy zainteresowani współpracą...",
    successStatus: "Wiadomość została wysłana!",
    errorStatus: "BŁĄD! Spróbuj ponownie.",
    emailLabel: "Podaj swój adres email",
    subjectLabel: "Podaj temat wiadomości",
    textLabel: "Podaj treść wiadomości",
    buttonBefore: "WYŚLIJ",
    buttonAfter: "WYSŁANO",
  },
  EN: {
    header: "Contact",
    subject: "SUBJECT",
    subjectPlaceholder: "Recruitment",
    text: "MESSAGE",
    textPlaceholder: "We are interested in cooperation...",
    successStatus: "The message has been sent!",
    errorStatus: "ERROR! Please try again.",
    emailLabel: "Enter your email address",
    subjectLabel: "Enter the subject of the message",
    textLabel: "Enter the content of the message",
    buttonBefore: "SEND",
    buttonAfter: "SENT",
  },
};

export const ContactCard = () => {
  const { currentLang } = useLanguage();
  const currentText = text[currentLang];

  const [formData, setFormData] = useState<EmailData>({
    email: "",
    subject: "",
    text: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus(null);

    const validationError = validateEmailData(formData, currentLang);
    if (validationError) {
      setStatus(validationError); // błąd
      return;
    }

    try {
      const response = await sendEmail(formData);

      if (response) {
        setStatus(currentText.successStatus);
        setTimeout(() => {
          setStatus(null);
        }, 3000);
        setFormData({
          email: "",
          subject: "",
          text: "",
        });
      } else {
        setStatus(currentText.errorStatus);
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus(currentText.errorStatus);
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5 text-text relative"
    >
      <div className="flex items-center gap-2 text-2xl">
        <MdPermContactCalendar className="text-primary" />
        <h1 className=" font-medium">{currentText.header}</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between gap-8">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email" className="font-medium text-lg ">
            EMAIL
          </label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.email}
            name="email"
            aria-label={currentText.emailLabel}
            className="rounded-lg px-3 py-1 focus:outline-none focus:scale-110 bg-secondary-hover"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="subject" className="font-medium text-lg ">
            {currentText.subject}
          </label>
          <input
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
            aria-label={currentText.subjectLabel}
            className="rounded-lg px-3 py-1 focus:outline-none focus:scale-110 bg-secondary-hover"
            placeholder={currentText.subjectPlaceholder}
            required
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="text" className="font-medium text-lg ">
          {currentText.text}
        </label>
        <textarea
          name="text"
          onChange={handleChange}
          value={formData.text}
          aria-label={currentText.textLabel}
          className="rounded-lg px-3 py-1 focus:outline-none focus:scale-105 bg-secondary-hover max-h-[300px] min-h-[120px]"
          placeholder={currentText.textPlaceholder}
          required
        />
      </div>
      {status && (
        <p
          className={` absolute bottom-[65px] left-1/2 -translate-x-1/2  text-nowrap text-sm ${
            status.includes("BŁĄD") || status.includes("ERROR")
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {status}
        </p>
      )}
      

      <AnimatedButton
        elemBefore={{
          text: currentText.buttonBefore,
          icon: <FiChevronsRight />,
        }}
        elemAfter={{ text: currentText.buttonAfter, icon: <FaCheck /> }}
      />
    </form>
  );
};

import { useState } from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { sendEmail, EmailData } from "../API/send-email";
import { validateEmailData } from "@/utils/validate-email-data";

export const ContactCard = () => {
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

    const validationError = validateEmailData(formData);
    if (validationError) {
      setStatus(validationError); // błąd
      return;
    }

    try {
      const response = await sendEmail(formData);
      if (response) {
        setStatus("Wiadomość została wysłana!");
        setTimeout(() => {
          setStatus(null);
        }, 3000);
        setFormData({
          email: "",
          subject: "",
          text: "",
        });
      } else {
        setStatus("Wystąpił błąd serwera. Spróbuj ponownie.");
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      }
    } catch (error) {
      setStatus(error.message || "Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5 text-text relative"
    >
      <div className="flex items-center gap-2 text-2xl">
        <MdPermContactCalendar className="text-primary" />
        <h1 className=" font-medium">Kontakt</h1>
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
            aria-label="Podaj swój adres email"
            className="rounded-lg px-3 py-1 focus:outline-none focus:scale-110 bg-secondary-hover"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="subject" className="font-medium text-lg ">
            TYTUŁ
          </label>
          <input
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
            aria-label="Podaj temat wiadomości"
            className="rounded-lg px-3 py-1 focus:outline-none focus:scale-110 bg-secondary-hover"
            placeholder="Rekrutacja"
            required
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="text" className="font-medium text-lg ">
          TREŚĆ
        </label>
        <textarea
          name="text"
          onChange={handleChange}
          value={formData.text}
          aria-label="Podaj treść wiadomości"
          className="rounded-lg px-3 py-1 focus:outline-none focus:scale-105 bg-secondary-hover max-h-[300px] min-h-[120px]"
          placeholder="Jesteśmy zainteresowani współpracą..."
          required
        />
      </div>
      {status && (
        <p
          className={` absolute bottom-[65px] left-1/2 -translate-x-1/2  text-nowrap text-sm ${
            status.includes("błąd") ? "text-red-500" : "text-green-500"
          }`}
        >
          {status}
        </p>
      )}
      <button className="rounded-lg px-3 py-1 bg-primary hover:bg-primary-hover text-lg text-secondary font-medium mt-6 self-center">
        WYŚLIJ
      </button>
    </form>
  );
};

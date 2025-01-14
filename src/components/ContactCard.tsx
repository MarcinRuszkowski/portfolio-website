import { MdPermContactCalendar } from "react-icons/md";

export const ContactCard = () => {
  return (
    <form className="flex flex-col items-start justify-center overflow-hidden border-2 border-[#656565] rounded-lg bg-secondary p-5 gap-5 text-secondary ">
      <div className="flex items-center gap-2 text-2xl">
        <MdPermContactCalendar className="text-primary" />
        <h1 className="text-text font-medium">Kontakt</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between gap-8">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email" className="font-medium text-xl text-text">
            EMAIL
          </label>
          <input
            type="text"
            name="email"
            className="rounded-lg px-3 py-1 focus:outline-none focus:scale-110"
            placeholder="example@example.com"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="title" className="font-medium text-xl text-text">
            TYTUŁ
          </label>
          <input
            type="text"
            name="title"
            className="rounded-lg px-3 py-1 focus:outline-none focus:scale-110"
            placeholder="Rekrutacja"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="text" className="font-medium text-xl text-text">
          TREŚĆ
        </label>
        <textarea
          name="text"
          className="rounded-lg px-3 py-1 focus:outline-none focus:scale-110 max-h-[300px] min-h-[120px]"
          placeholder="Jesteśmy zainteresowani współpracą..."
        />
      </div>
      <button className="rounded-lg px-3 py-1 bg-primary hover:bg-primary-hover text-xl  font-medium self-center mt-5">
        WYŚLIJ
      </button>
    </form>
  );
};

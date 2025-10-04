import { useLanguage } from "../store";
import translations from "../assets/translations";
function Contact() {
  const language = useLanguage((state) => state.language);
  return (
    <section className="pt-15 px-8 pb-3" id="contact">
      <form action="" method="post" className="flex flex-wrap">
        <label
          htmlFor="name"
          className="text-gray-800 basis-full mb-2.5 me-0 md:me-5 md:basis-[calc(50%-10px)] text-lg"
        >
          {translations[language].contact.name} *
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder={translations[language].contact.namePlacholder}
            required
            autoComplete="true"
            className="border-1 w-full border-gray-300 focus:outline-0 focus:border-3 transition-all p-3 rounded-sm"
          />
        </label>
        <label
          htmlFor="email"
          className="text-gray-800 basis-full mb-2.5 md:basis-[calc(50%-10px)] text-lg"
        >
          {translations[language].contact.email} *
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={translations[language].contact.emailPlaceholder}
            required
            autoComplete="true"
            className="border-1  w-full border-gray-300 focus:outline-0 focus:border-3 transition-all  p-3 rounded-sm"
          />
        </label>
        <label htmlFor="message" className="text-gray-800 mb-2.5 basis-full">
          {translations[language].contact.message} *
          <br />
          <textarea
            name="message"
            id="message"
            rows={5}
            cols={12}
            placeholder={translations[language].contact.messagePlacholder}
            className="border-1 resize-none w-full border-gray-300 focus:outline-0 focus:border-3 transition-all  p-3 rounded-sm"
          ></textarea>
        </label>
        <button
          type="button"
          className="bg-sky-600 mt-5 mx-auto block hover:bg-sky-400 transition-colors  hover:cursor-pointer text-white font-bold text-lg rounded-sm capitalize px-4 py-2"
        >
          {translations[language].contact.button}
        </button>
      </form>
    </section>
  );
}
function Heading() {
  const language = useLanguage((state) => state.language);
  return (
    <div className="text-center mb-15">
      <h3 className="text-5xl mb-2.5 font-black ">
        {translations[language].contact.headingTitle + " "}
        <span className="underline text-5xl font-medium">
          {translations[language].contact.headingUnderline}
        </span>
      </h3>
      <p className="text-gray-500 text-2xl">
        {translations[language].contact.headingDescription}
      </p>
    </div>
  );
}

export default Contact;

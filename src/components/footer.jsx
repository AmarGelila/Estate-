import translations from "../assets/translations";
import { useLanguage } from "../store";
function Footer() {
  const language = useLanguage((state) => state.language);

  return (
    <footer className="pt-5 mt-5 bg-gray-900">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 px-5 pb-8 gap-8">
        <div className="info">
          <img src="/assets/logo_dark.svg" alt="" />
          <p className="text-lg mb-4 leading-snug text-gray-300 mt-8">
            {translations[language].footer.blocks[0]}
          </p>
        </div>
        <div className="links">
          <h5 className="text-xl ms-2 text-white  mb-2 font-bold">
            {translations[language].footer.blocks[1].title}
          </h5>
          <ul>
            <li>
              <a
                href="#home"
                className="text-gray-600 p-2 text-lg hover:text-gray-400 hover:cursor-pointer"
              >
                {translations[language].footer.blocks[1].items[0]}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600  p-2  hover:text-gray-400  hover:cursor-pointer"
              >
                {translations[language].footer.blocks[1].items[1]}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600  p-2  hover:text-gray-400 hover:cursor-pointer"
              >
                {translations[language].footer.blocks[1].items[2]}
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-gray-600  p-2  hover:text-gray-400 hover:cursor-pointer"
              >
                {translations[language].footer.blocks[1].items[3]}
              </a>
            </li>
          </ul>
        </div>
        <div className="subscribe">
          <h5 className="text-xl text-white mb-2 font-bold">
            {translations[language].footer.blocks[2].title}
          </h5>
          <p className="text-lg mb-4 leading-snug text-gray-300">
            {translations[language].footer.blocks[2].description}
          </p>
          <form action="" method="POST" className="w-full flex flex-wrap gap-2">
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder={
                translations[language].footer.blocks[2].mailPlaceholder
              }
              className=" bg-gray-800 shrink-1 focus:outline-0 text-gray-300 p-3 rounded-sm"
            />
            <button
              type="submit"
              className="bg-sky-600 inline-block md:mx-0 hover:bg-sky-400 transition-colors  hover:cursor-pointer text-white font-bold text-lg rounded-sm px-4 py-3"
            >
              {translations[language].footer.blocks[2].button}
            </button>
          </form>
        </div>
      </div>
      <p className="py-5 border-t-4 font-bold capitalize border-gray-800 text-white border-double px-3 text-center">
        {translations[language].footer.description}
      </p>
    </footer>
  );
}

export default Footer;

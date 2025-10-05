import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import translations from "../assets/translations";
import { useLanguage } from "../store";

function Header() {
  const [showMenuSm, setShowMenuSm] = useState(false);
  const language = useLanguage((state) => state.language);
  const changeLanguage = useLanguage((state) => state.changeLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <header className="fixed top-0 start-0 w-full z-50">
      <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-b from-gray-800 from-1% to-transparent to-100%">
        <div className="logo">
          <img src="/assets/logo.svg" alt="Estate Logo" />
        </div>

        <button
          type="button"
          className="text-2xl text-white md:hidden  cursor-pointer hover:opacity-50 rtl:rotate-180"
          onClick={() => setShowMenuSm(true)}
        >
          <CiMenuFries size={40} fontWeight={900} />
        </button>

        <div
          className={`${
            showMenuSm
              ? "bg-white fixed top-0 end-0 w-screen h-screen"
              : "hidden"
          } md:block md:bg-transparent md:h-auto md:w-auto md:static md:p-0 pt-30 px-5 pb-5 `}
        >
          <button
            type="button"
            className="absolute top-5 end-5 md:hidden cursor-pointer hover:opacity-50"
            onClick={() => setShowMenuSm(false)}
          >
            <AiOutlineClose size={40} />
          </button>

          <ul className="flex gap-4 justify-center items-center flex-col md:flex-row ">
            {translations[language].navLinks.map((text, i) => (
              <Navlink
                hideMenu={setShowMenuSm}
                content={text}
                link={translations["en"].navLinks[i].toLowerCase()}
                key={text}
              />
            ))}

            <li>
              <button
                className="p-2 cursor-pointer text-gray-700 md:text-gray-200  text-lg ms-5 font-medium uppercase hover:opacity-75"
                onClick={changeLanguage}
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function Navlink({ content, link, hideMenu }) {
  return (
    <li>
      <a
        href={`#${link}`}
        className="p-2 cursor-pointer text-black md:text-white text-lg font-bold uppercase hover:opacity-75"
        onClick={() => hideMenu(false)}
      >
        {content}
      </a>
    </li>
  );
}
export default Header;

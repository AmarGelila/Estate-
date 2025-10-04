import translations from "../assets/translations";
import { useLanguage } from "../store";

function Hero() {
  const language = useLanguage((state) => state.language);
  return (
    <section
      id="home"
      className="h-screen bg-center bg-[url('assets/header_img.png')] flex items-center justify-center"
    >
      <div className="pt-5 px-3 pb-5 translate-y-20 opacity-25 animate-popTop ">
        <h1 className="text-white text-center text-8xl font-black">
          {translations[language].heroLeading}
        </h1>
        <div className="actions flex justify-center items-center gap-4 mt-15">
          <a
            href="#projects"
            className="border-4 rounded-md cursor-pointer transition-opacity border-white py-3 px-5 me-3 text-white bg-transparent font-bold text-lg hover:opacity-75"
          >
            {translations[language].heroButtons[0]}
          </a>
          <a
            href="#contact"
            className="border-4 rounded-md cursor-pointer transition-opacity border-white py-3 px-5 text-white bg-sky-600 font-bold text-lg hover:opacity-75"
          >
            {translations[language].heroButtons[1]}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

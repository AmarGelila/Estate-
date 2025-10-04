import translations from "../assets/translations";
import { useLanguage } from "../store";

function About() {
  const language = useLanguage((state) => state.language);

  return (
    <section className="pt-15 px-8 pb-3" id="about">
      <Heading />
      <div className="flex flex-wrap justify-center items-center">
        <div className="image basis-full md:basis-1/2 mb-5 md:mb-0 flex justify-center">
          <img
            src="assets/brand_img.png"
            alt={translations[language].about.imgTitle}
            className="h-[60vh]"
          />
        </div>
        <div className="ps-5 basis-full md:basis-1/2 ">
          <div className="grid grid-cols-2">
            {translations[language].about.states.map((state) => (
              <State
                title={state.title}
                description={state.description}
                key={state.title}
              />
            ))}
          </div>
          <p className="text-gray-500 leading-10 text-2xl mt-5">
            {translations[language].about.description}
          </p>
          <button
            type="button"
            className="bg-sky-600 mt-5 mx-auto inline-block md:mx-0 hover:bg-sky-400 transition-colors  hover:cursor-pointer text-white font-bold text-lg rounded-lg px-4 py-2"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
function Heading() {
  const language = useLanguage((state) => state.language);
  return (
    <div className="text-center mb-15">
      <h3 className="text-5xl mb-2.5 font-black ">
        {translations[language].about.headingTitle + " "}
        <span className="underline text-5xl font-medium">
          {translations[language].about.headingUnderline}
        </span>
      </h3>
      <p className="text-gray-500 text-2xl">
        {translations[language].about.headingDescription}
      </p>
    </div>
  );
}
function State({ title, description }) {
  return (
    <div className="p-3">
      <h4 className="text-gray-800 mb-2.5 text-5xl font-black ">{title}</h4>
      <span className="text-gray-400 text-xl">{description}</span>
    </div>
  );
}
export default About;

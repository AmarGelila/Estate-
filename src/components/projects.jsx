import { useLanguage } from "../store";
import { useState, useEffect, useRef } from "react";
import translations from "../assets/translations";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const projectsImgs = [
  "/assets/project_img_1.jpg",
  "/assets/project_img_2.jpg",
  "/assets/project_img_3.jpg",
  "/assets/project_img_4.jpg",
  "/assets/project_img_5.jpg",
  "/assets/project_img_6.jpg",
];
function Projects() {
  const [scroll, setScroll] = useState(0);
  const wrapper = useRef(null);
  const language = useLanguage((state) => state.language);
  const dir = useLanguage((state) => state.dir);
  const scrollLimit =
    wrapper.current?.scrollWidth - wrapper.current?.clientWidth;
  const left = (prev) => (prev <= 0 ? scrollLimit : prev - 320);
  const right = (prev) => (prev >= scrollLimit ? 0 : prev + 320);

  useEffect(() => {
    if (dir === "rtl")
      wrapper.current.scrollTo({ top: 0, left: -scroll, behavior: "smooth" });
    else wrapper.current.scrollTo({ top: 0, left: scroll, behavior: "smooth" });
  }, [scroll, dir]);

  return (
    <section className="pt-15 px-8 pb-3" id="projects">
      <Heading />
      <div className="btns mb-8 flex gap-2 justify-end">
        <button
          type="button"
          className="bg-gray-300 direction- px-3 py-2 hover:bg-gray-400 hover:cursor-pointer transition-colors rtl:order-1"
          onClick={() =>
            setScroll(
              dir === "ltr" ? (prev) => left(prev) : (prev) => right(prev)
            )
          }
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="bg-gray-300 px-3 py-2 hover:bg-gray-400  hover:cursor-pointer transition-colors "
          onClick={() =>
            setScroll(
              dir === "ltr" ? (prev) => right(prev) : (prev) => left(prev)
            )
          }
        >
          <FaChevronRight />
        </button>
      </div>
      <div
        className="flex flex-nowrap overflow-x-scroll hide-scrollbar pb-20 gap-6"
        ref={wrapper}
      >
        {projectsImgs.map((img, i) => (
          <Project
            src={img}
            data={translations[language].projects.data[i]}
            key={translations[language].projects.data[i].title + i}
          />
        ))}
      </div>
    </section>
  );
}
function Heading() {
  const language = useLanguage((state) => state.language);
  return (
    <div className="text-center mb-15">
      <h3 className="text-5xl mb-2.5 font-black ">
        {translations[language].projects.headingTitle + " "}
        <span className="underline text-5xl font-medium">
          {translations[language].projects.headingUnderline}
        </span>
      </h3>
      <p className="text-gray-500 text-2xl">
        {translations[language].projects.headingDescription}
      </p>
    </div>
  );
}
function Project({ src, data }) {
  return (
    <div className="grow-1 w-80 relative">
      <img src={src} alt={data.alt} className="w-80 max-w-80" />
      <div className="z-3 absolute bg-white shadow-lg shadow-gray-300/50 bottom-0 text-center start-1/2 translate-y-1/2 w-8/10 p-3 ltr:-translate-x-1/2 rtl:translate-x-1/2">
        <h5 className="text-gray-800 text-xl mb-3">{data.title}</h5>
        <p className="text-gray-500 text-lg">{data.description}</p>
      </div>
    </div>
  );
}
export default Projects;

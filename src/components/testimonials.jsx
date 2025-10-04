import { useLanguage } from "../store";
import translations from "../assets/translations";
import { FaStar } from "react-icons/fa";
const customersImgs = [
  "/assets/profile_img_1.png",
  "/assets/profile_img_2.png",
  "/assets/profile_img_3.png",
];
function Testimonials() {
  const language = useLanguage((state) => state.language);

  return (
    <section className="pt-15 px-8 pb-3" id="testimonials">
      <Heading />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 justify-center">
        {customersImgs.map((img, i) => (
          <Testimonial
            imgSrc={img}
            data={translations[language].testimonials.data[i]}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

function Testimonial({ imgSrc, data }) {
  return (
    <div className="p-4 text-center border-1 border-gray-300 rounded-sm">
      <div className="image flex justify-center pt-5 mb-5">
        <img src={imgSrc} alt={data.name} />
      </div>
      <h3 className="text-gray-800 mb-0 text-xl">{data.name}</h3>
      <span className="text-gray-600 text-lg">{data.job}</span>
      <div className="flex justify-center gap-1 my-4">
        <FaStar color="#ffcc00" size={25} />
        <FaStar color="#ffcc00" size={25} />
        <FaStar color="#ffcc00" size={25} />
        <FaStar color="#ffcc00" size={25} />
        <FaStar color="#ffcc00" size={25} />
      </div>
      <p className="text-gray-600">{data.description}</p>
    </div>
  );
}
function Heading() {
  const language = useLanguage((state) => state.language);
  return (
    <div className="text-center mb-15">
      <h3 className="text-5xl mb-2.5 font-black ">
        {translations[language].testimonials.headingTitle + " "}
        <span className="underline text-5xl font-medium">
          {translations[language].testimonials.headingUnderline}
        </span>
      </h3>
      <p className="text-gray-500 text-2xl">
        {translations[language].testimonials.headingDescription}
      </p>
    </div>
  );
}
export default Testimonials;

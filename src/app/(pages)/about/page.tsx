import Image from "next/image";
import { aboutData } from "../../data/data";

// About page
const About: React.FC = () => {
  return (
    <div className="px-10 lg:px-44 mt-10">
      {aboutData.map((item) => (
        <div key={item.id} className="space-y-12">
          {/* Title */}
          <div className="flex justify-center text-2xl items-center">
            <h2 className="w-full md:w-[60%] text-center font-semibold text-gray-800">
              {item.title}
            </h2>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <Image
                src={item.img}
                alt={item.title}
                height={400} // Set explicit height
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Subtitle */}
          <h3 className="text-2xl mt-10 text-center font-medium text-gray-700">
            {item.subTitle}
          </h3>

          {/* Description */}
          <div className="flex justify-center">
            <p className="w-full md:w-[60%] text-lg text-gray-600 leading-relaxed text-center">
              {item.dec}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;

export function generateMetadata() {
  return {
    title: "about page",
    description: "about page",
  };
}

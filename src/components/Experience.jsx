import React from "react";
import techImages from "../assets";

const Experience = () => {
  const techList = [
    {
      id: 1,
      srcImg: techImages.html,
      title: "HTML",
      shadowColor: "shadow-orange-500",
    },
    {
      id: 2,
      srcImg: techImages.css,
      title: "CSS",
      shadowColor: "shadow-blue-500",
    },
    {
      id: 3,
      srcImg: techImages.javascript,
      title: "JavaScript",
      shadowColor: "shadow-yellow-500",
    },
    {
      id: 4,
      srcImg: techImages.react,
      title: "React",
      shadowColor: "shadow-blue-600",
    },
    {
      id: 5,
      srcImg: techImages.tailwind,
      title: "Tailwind",
      shadowColor: "shadow-sky-400",
    },
    {
      id: 6,
      srcImg: techImages.github,
      title: "Git",
      shadowColor: "shadow-neutral-200",
    },
    {
      id: 7,
      srcImg: techImages.firebase,
      title: "Firebase",
      shadowColor: "shadow-amber-200",
    },
    {
      id: 8,
      srcImg: techImages.styled_components,
      title: "Styled Component",
      shadowColor: "shadow-pink-200",
    },
    {
      id: 9,
      srcImg: techImages.laravel,
      title: "Laravel",
      shadowColor: "shadow-red-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black md:h-screen pt-[100px] px-4"
    >
      <div className="md:max-w-screen-lg mx-auto">
        <div>
          <p className="text-4xl inline border-b-4 border-gray-500 text-white">
            Experience
          </p>
        </div>
        <p className="py-6 text-white">
          These are the technologies I've worked with
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 mt-10">
          {techList.map(({ id, srcImg, title, shadowColor }) => {
            return (
              <div
                key={id}
                className={`flex flex-col items-center space-y-4 rounded-lg shadow-md ${shadowColor} hover:scale-105 duration-300`}
              >
                <img src={srcImg} alt="" className="w-20 mx-auto" />
                <span className="text-lg text-white">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

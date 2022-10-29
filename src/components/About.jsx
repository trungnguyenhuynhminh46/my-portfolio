import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          quisquam deleniti voluptas voluptates et voluptatibus, sint eligendi,
          aut ut quod corrupti? Minima nam iste vero provident, accusantium vel
          dolorum placeat assumenda aut eius veritatis officiis debitis quo
          cumque facere tempore inventore amet libero repudiandae sequi maiores
          illo ut! Alias, exercitationem.
        </p>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          quisquam deleniti voluptas voluptates et voluptatibus, sint eligendi,
          aut ut quod corrupti? Minima nam iste vero provident, accusantium vel
          dolorum placeat assumenda aut eius veritatis officiis debitis quo
          cumque facere tempore inventore amet libero repudiandae sequi maiores
          illo ut! Alias, exercitationem.
        </p>
      </div>
    </div>
  );
};

export default About;

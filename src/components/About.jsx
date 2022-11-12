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
            About me
          </p>
        </div>
        <p className="mt-8 text-xl">
          Dedicated and hardworking Frontend Developer. Interested in learning
          new technology. I'm very eager to use my knowledge to make beautiful
          web interfaces with great features.
        </p>
        <p className="mt-4 text-xl">
          Although I have experience in both Frontend and Backend, I prefer
          Frontend a little bit.
        </p>
        <p className="mt-4 text-xl">
          Certification: TOEIC Reading & Listening 900
        </p>
      </div>
    </div>
  );
};

export default About;

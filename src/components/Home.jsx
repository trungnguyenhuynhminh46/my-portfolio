import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="pt-[200px] md:pt-0 h-screen w-full p-4 bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div>
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hi, I'm Trung - a data engineering student at university of
            technology and education, I'm also a self-taught web developer. My
            desire is to create beautiful web interfaces in a creative, dynamic
            and equal environment.
          </p>
          <div>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="group mx-auto mt-[20px] md:mx-0 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://media1.giphy.com/media/LmNwrBhejkK9EFP504/200.gif"
            alt="my profile"
            className="rounded-2xl mx-auto mt-[80px] w-[400px] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

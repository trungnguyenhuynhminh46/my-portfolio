import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full p-4 bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div>
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            non repudiandae, possimus minima ad laborum consequatur nesciunt
            consectetur nemo magni fugit ipsam dolorem facere quaerat voluptate
            incidunt adipisci ratione, aliquid odit itaque vel iste quia.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

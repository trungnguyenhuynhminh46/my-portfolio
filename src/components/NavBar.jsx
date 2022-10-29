import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [navIsShown, setNavIsShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Trung</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              key={id}
            >
              {link}
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => {
          setNavIsShown((prev) => !prev);
        }}
      >
        {navIsShown ? (
          <FaTimes size={30}></FaTimes>
        ) : (
          <FaBars size={30}></FaBars>
        )}
      </div>
      {navIsShown && (
        <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="capitalize px-4 py-6 cursor-pointer text-4xl"
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

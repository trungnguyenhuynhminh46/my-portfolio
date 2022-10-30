import React from "react";
import portfolioImage from "../assets/portfolio";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      imgSrc: portfolioImage.installNode,
      demoHref: "abc.com",
      srcHref: "xyz.com",
    },
    {
      id: 2,
      imgSrc: portfolioImage.usestate,
      demoHref: "abc.com",
      srcHref: "xyz.com",
    },
    {
      id: 3,
      imgSrc: portfolioImage.navbar,
      demoHref: "abc.com",
      srcHref: "xyz.com",
    },
    {
      id: 4,
      imgSrc: portfolioImage.reactParallax,
      demoHref: "abc.com",
      srcHref: "xyz.com",
    },
    {
      id: 5,
      imgSrc: portfolioImage.reactSmooth,
      demoHref: "abc.com",
      srcHref: "xyz.com",
    },
    {
      id: 6,
      imgSrc: portfolioImage.reactWeather,
      demoHref: "abc.com",
      srcHref: "xyz.com",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white px-4"
    >
      <div className="max-w-screen-lg w-full min-h-full mx-auto">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h1>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 pt-8">
          {portfolios.map(({ id, imgSrc, demoHref, srcHref }) => {
            return (
              <div key={id} className="rounded-md shadow-md shadow-gray-600">
                <img
                  src={imgSrc}
                  alt=""
                  className="rounded-md hover:scale-105 transition duration-300"
                />
                <div className="flex justify-around">
                  {demoHref && (
                    <a
                      href={demoHref}
                      className="px-6 py-3 m-4 hover:scale-105 transition duration-300"
                      target="_blank"
                    >
                      Demo
                    </a>
                  )}
                  {srcHref && (
                    <a
                      href={srcHref}
                      className="px-6 py-3 m-4 hover:scale-105 transition duration-300"
                      target="_blank"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

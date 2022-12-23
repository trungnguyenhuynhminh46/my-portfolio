import React from "react";
import portfolioImage from "../assets/portfolio";
// Components
import PortfolioImages from "./PortfolioImages";

const Portfolio = () => {
  const portfolios = [
    {
      // Monkey Blogging
      id: 1,
      imgsSrc: [
        portfolioImage.monkeyBloggingHomePage,
        portfolioImage.monkeyBloggingLoginPage,
        portfolioImage.monkeyBlogging1,
        portfolioImage.monkeyBlogging2,
        portfolioImage.monkeyBlogging3,
        portfolioImage.monkeyBlogging4,
      ],
      demoHref: "https://monkey-blogging-cyan.vercel.app/",
      srcHref: "https://github.com/trungnguyenhuynhminh46/Monkey_Blogging",
    },
    {
      // Real time chat app
      id: 2,
      imgsSrc: [
        portfolioImage.realTimeChatApp,
        portfolioImage.realTimeChatAppLogin,
      ],
      demoHref: "https://my-real-time-chat-app.vercel.app/",
      srcHref:
        "https://github.com/trungnguyenhuynhminh46/my-real-time-chat-app",
    },
    // {
    //   // Tiktok clone
    //   id: 3,
    //   imgsSrc: [portfolioImage.arrayDestruct],
    //   // demoHref: "abc.com",
    //   srcHref: "https://github.com/trungnguyenhuynhminh46/tiktok-clone",
    // },
    {
      // Music player
      id: 3,
      imgsSrc: [portfolioImage.musicPlayer],
      demoHref: "https://musicplayer-xi.vercel.app/",
      srcHref:
        "https://github.com/trungnguyenhuynhminh46/Java-script-mini-projects/tree/main/%5BJS%5D%20music_player",
    },
    {
      // Unimart
      id: 4,
      imgsSrc: [portfolioImage.unimartAdmin, portfolioImage.unimart],
      demoHref: "https://minhtrung.unitopcv.com/",
      srcHref: "https://github.com/trungnguyenhuynhminh46/unimart",
    },
    {
      // Mogo Template
      id: 5,
      imgsSrc: [
        portfolioImage.mogoTemplate,
        portfolioImage.mogoTemplate1,
        portfolioImage.mogoTemplate2,
        portfolioImage.mogoTemplate3,
      ],
      demoHref: "https://mogo-template-livid.vercel.app/",
      srcHref: "https://github.com/trungnguyenhuynhminh46/Mogo-Template",
    },
    {
      // The Kids Template
      id: 6,
      imgsSrc: [
        portfolioImage.TheKids1,
        portfolioImage.TheKids2,
        portfolioImage.TheKids3,
      ],
      demoHref: "https://kids-playground.vercel.app/",
      srcHref: "https://github.com/trungnguyenhuynhminh46/Kids-playground",
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
          {portfolios.map(({ id, imgsSrc, demoHref, srcHref }) => {
            return (
              <div key={id} className="rounded-md shadow-md shadow-gray-600">
                <PortfolioImages data={imgsSrc}></PortfolioImages>
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

import React from "react";
import Slider from "react-slick";
// Assets
export default function PortfolioImages({ data }) {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };
  return (
    <div className="w-full">
      <Slider {...settings} className="">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <img src={item} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

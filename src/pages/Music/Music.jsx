import React from "react";
import "./Music.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Pictures } from "../../utils/morayo";
const Music = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 884,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="custom-bg-black music py-5">
      <div className="container-xl px-xl-5">
        <p className="custom-text-white text-start  pb-3">
          MORE MUSIC FROM WIZKID
        </p>
        <Slider {...settings}>
          {Pictures.map((music) => {
            const { _id, link, image } = music;
            return (
              <div key={_id}>
                <a target="_blank" href={link}>
                  <div>
                    <img src={image} alt="image" />
                  </div>
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Music;

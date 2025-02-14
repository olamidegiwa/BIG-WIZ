import React from "react";
import "./Music.css";
import frentbaiyaz from "../../assets/image/Piece_of_my_Heart.webp";
import sound2 from "../../assets/image/Wizkid_S2.webp";
import mlle from "../../assets/image/Wizkid_MoreLoveLessEgo.webp";
import badtome from "../../assets/image/Wizkid_BadToMe.webp";
import mil from "../../assets/image/Wizkid_MIL_Deluxe.webp";
import essence from "../../assets/image/Wizkid_Essence.webp";
import joro from "../../assets/image/Wizkid_Joro.webp";
import mil2 from "../../assets/image/Wizkid_NoStress.webp";
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
        <p className="custom-text-white text-lg-start text-center pb-3">
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

import React from "react";
import "./HeroSection.css";
import morayo from "../assets/image/morayo.webp";
import kesedance from "../assets/image/kese-dance.webp";
import pieceofmyheart from "../assets/image/Piece_of_my_Heart.webp";
const HeroSection = () => {
  return (
    <div className="custom-bg-black py-5 herosection ">
      <div className="container px-4 d-flex flex-column flex-xl-row justify-content-xl-center align-items-xl-center herosection3 justify-content-sm-start align-items-sm-start py-xl-5">
        <img src={morayo} alt="morayo" className="morayo" />

        <div className="d-flex flex-column justify-content-start align-items-start herosection4">
          <h5 className="m-0 custom-text-white herosection1">THE NEW ALBUM</h5>
          <h1 className=" custom-text-white herosection2 ">MORAYO</h1>
          <div>
            <a
              target="_blank"
              href="https://wizkid.lnk.to/morayo"
              className=" m-0 custom-bg-black custom-text-white px-3 py-1 border border-2 border-white text-decoration-none herosectionA"
            >
              LISTEN NOW
            </a>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5 d-flex flex-column flex-xl-row justify-content-xl-center align-items-xl-center herosection3 justify-content-sm-start align-items-sm-start">
        <img src={kesedance} alt="morayo" className="morayo" />

        <div className="d-flex flex-column justify-content-start align-items-start herosection4">
          <h5 className="m-0 custom-text-white herosection1">
            THE NEWEST SINGLE
          </h5>
          <h1 className=" custom-text-white herosection5 ">KESE (DANCE)</h1>
          <a
            href="https://wizkid.lnk.to/kese"
            className=" m-0 custom-bg-black custom-text-white px-3 py-1 border border-2 border-white text-decoration-none herosectionA"
            target="_blank"
          >
            LISTEN NOW
          </a>
        </div>
      </div>
      <div className="container px-4 py-5 d-flex flex-column flex-xl-row justify-content-xl-center align-items-xl-center herosection3 justify-content-sm-start align-items-sm-start">
        <img src={pieceofmyheart} alt="morayo" className="morayo" />

        <div className="d-flex flex-column justify-content-start align-items-start herosection4">
          <h5 className="m-0 custom-text-white herosection5">
            PIECE OF MY HEART
          </h5>
          <h1 className=" custom-text-white herosection1 ">
            FEAT. BRENT FAIYAZ
          </h1>
          <div className="d-flex gap-4">
            <a
              href="https://wizkid.lnk.to/pieceofmyheart"
              className=" m-0 custom-bg-black custom-text-white px-3 py-1 border border-2 border-white text-decoration-none herosectionA"
              target="_blank"
            >
              LISTEN NOW
            </a>
            <a
              href="https://www.youtube.com/watch?v=zr_sTaYTCnU&feature=youtu.be"
              className=" m-0 custom-bg-black custom-text-white px-3 py-1 border border-2 border-white text-decoration-none herosectionA"
              target="_blank"
            >
              WATCH NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

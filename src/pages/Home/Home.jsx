import React, { useRef } from "react";
import "./Home.css";
import wizkid from "../../assets/Wizkid - Morayo (Official Album Trailer).mp4";
import HeroSection from "../../HeroSection/HeroSection";
import Music from "../Music/Music";
import Popup from "../../Popup/Popup";
import Tour from "../Tour/Tour";
import { Outlet } from "react-router-dom";

const Home = () => {
  const musics = useRef(null);
  const videos = useRef(null);
  const tours = useRef(null);

  const scrollToSections = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="home custom-bg-red ">
      <ul className="home1 d-flex  justify-content-md-center m-0">
        <li
          onClick={() => scrollToSections(musics)}
          className=" home4 custom-text-black"
        >
          MUSIC
        </li>
        <li
          onClick={() => scrollToSections(videos)}
          className=" home4 custom-text-black"
        >
          VIDEO
        </li>
        <li
          onClick={() => scrollToSections(tours)}
          className=" home4 custom-text-black "
        >
          TOUR
        </li>
      </ul>
      <video loop autoPlay muted preload playsInline src={wizkid}></video>
      <div className="px-2 px-lg-0 d-flex gap-md-5 gap-2 justify-content-center align-items-center pb-1">
        <h1 className="m-0 home2">THE NEW ALBUM</h1>
        <h2 className="m-0 home3">MORAYO</h2>
        <a href="https:/wizkid.lnk.to/morayo" target="_blank">
          <button className="custom-text-black py-1 px-md-2 px-1  custom-bg-red ">
            LISTEN NOW
          </button>
        </a>
      </div>
      <HeroSection />
      <div ref={musics}>
        <Music />
      </div>
      <div ref={videos}>
        <Popup />
      </div>
      <div ref={tours}>
        <Tour />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;

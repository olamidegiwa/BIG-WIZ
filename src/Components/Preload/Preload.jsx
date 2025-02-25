import React from "react";
import "./Preload.css";

const Preload = () => {
  return (
    <div className="preload">
      <div d-flex flex-column>
        <p className="emoji" data-aos="fade-up" aosDelay="800">
          🕊
        </p>
        <div className="d-flex">
          <h1 data-aos="fade-right" data-aos-duration="600">
            B
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="400">
            I
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="200">
            G
          </h1>
          <h1 data-aos="fade-left" data-aos-duration="0">
            W
          </h1>
          <h1 data-aos="fade-left" data-aos-duration="400">
            I
          </h1>
          <h1 data-aos="fade-left" aosDelay="600">
            Z
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Preload;

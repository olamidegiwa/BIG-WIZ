import React from "react";
import "./Preload.css";

const Preload = () => {
  return (
    <div className="preload">
      <div d-flex flex-column>
        <p className="emoji" data-aos="zoom-in-up" aosDelay="800">
          🕊
        </p>
        <div className="d-flex">
          <h1 data-aos="fade-right" data-aos-duration="500">
            B
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="400">
            I
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="300">
            G
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="200">
            W
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="100">
            I
          </h1>
          <h1 data-aos="fade-right" aosDelay="0">
            Z
          </h1>
        </div>

        {/* <h1 data-aos="fade-right">BIGWIZ</h1> */}
      </div>
    </div>
  );
};

export default Preload;

import React from "react";
import RCA from "../assets/image/rca.svg";
const RecordPolicy = () => {
  return (
    <div className=" record d-flex flex-column align-items-center align-items-xl-start  gap-1  py-xl-0  py-2">
      <a target="_blank" href="https://www.rcarecords.com/">
        <img src={RCA} alt="RCA" className="Rcaimage" />
      </a>

      <p className="custom-text-red text-xl-start  text-center m-0">
        {" "}
        <a
          target="_blank"
          href="https://www.sonymusic.com/"
          className="custom-text-red text-decoration-none pe-1"
        >
          &copy; 2025 Sony Music Entertainment.all rights <br /> reserverd.
        </a>
        <a
          target="_blank"
          href="https://www.sonymusic.com/terms-and-conditions/"
          className="custom-text-red text-decoration-none pe-1"
        >
          | Terms And Conditions
        </a>
        <a
          target="_blank"
          href="https://www.sonymusic.com/privacy-policy/  "
          className="custom-text-red text-decoration-none pe-1"
        >
          | Privacy Policy
        </a>
        <br />
        <a
          target="_blank"
          href=""
          className="custom-text-red text-decoration-none pe-1"
        >
          | How We User Your Data
        </a>
        <a
          target="_blank"
          href="https://www.sonymusic.com/how-we-use-your-data/"
          className="custom-text-red text-decoration-none pe-1"
        >
          | Your Califonia Privacy Rights
        </a>
        <a
          target="_blank"
          href="https://www.sonymusic.com/ccpa-contact-form/"
          className="custom-text-red text-decoration-none pe-1"
        >
          | Do Not <br /> Sell My Personal Information
        </a>
        <a
          target="_blank"
          href="https://www.sonymusic.com/feedback/"
          className="custom-text-red text-decoration-none"
        >
          | Send Us Feedback
        </a>
      </p>
    </div>
  );
};

export default RecordPolicy;

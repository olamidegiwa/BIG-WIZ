import React from "react";
import "./Footer.css";
import Email from "./Email";
import RecordPolicy from "./RecordPolicy";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <di className="custom-bg-black footer py-4  ">
      <div className="custom-bg-black py-4 footer d-flex flex-column-reverse  flex-xl-row justify-content-center align-items-center justify-content-xl-evenly align-items-xl-end gap-5 pe-xl-3">
        <RecordPolicy />
        <Email />
        <SocialMedia />
      </div>
    </di>
  );
};

export default Footer;

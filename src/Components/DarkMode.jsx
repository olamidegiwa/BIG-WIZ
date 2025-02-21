import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const DarkMode = ({ darkMode, setDarkMode }) => {
  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("dark-mode");
  }
  return (
    <div
      onClick={() => {
        document.body.classList.toggle("light-mode");
        setDarkMode(!darkMode);
        if (document.body.classList.contains("light-mode")) {
          localStorage.setItem("dark-mode", JSON.stringify(false));
        } else {
          localStorage.setItem("dark-mode", JSON.stringify(true));
        }
      }}
    >
      <span className="darkMode ">{darkMode ? <FaMoon /> : <FaRegMoon />}</span>
    </div>
  );
};

export default DarkMode;

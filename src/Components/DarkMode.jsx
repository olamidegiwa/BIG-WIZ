import React, { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }
  const icon = darkMode ? <BsFillMoonFill /> : <BsMoon />;
  return (
    <div
      className="Dark-Mode"
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
      {icon}
    </div>
  );
};

export default DarkMode;

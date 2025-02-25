import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import DarkMode from "./Components/DarkMode";
import AOS from "aos";
import "aos/dist/aos.css";
import Preload from "./Components/Preload/Preload";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      {loading ? (
        <Preload />
      ) : (
        <div>
          <DarkMode />
          <ScrollToTop />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

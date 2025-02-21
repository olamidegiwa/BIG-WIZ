import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    <>
      <DarkMode />
      <ScrollToTop />
      <Home />
      <Footer />
    </>
  );
}

export default App;

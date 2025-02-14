import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
 
  return (
    <>
      <ScrollToTop />
      <Home/>
      <Footer />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(screenWidth);

  const updateScreenDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenDimensions);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenDimensions);
    };
  });
  return (
    <React.Fragment>
      <Navbar screenWidth={screenWidth} />
      <Banner screenWidth={screenWidth} />
      <Hero />
      <Footer />
    </React.Fragment>
  );
}

export default App;

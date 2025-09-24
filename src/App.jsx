import React from "react";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
("./Navbar/Navbar.jsx");
const App = () => {
  const [color, setcolor] = useState("white");
  const toggleTheme = (color) => {
    setcolor(color === "white" ? "black" : "white");
  };
  return (
    <div className={color === "white" ? "appWhite" : "appBlack"}>
      <Navbar navResponse={toggleTheme}></Navbar>
      <Home appResponse={color}></Home>
      <About appResponse={color}></About>
      <Project appResponse={color}></Project>
      <Contact appResponse={color}></Contact>
      <Footer appResponse={color}></Footer>
    </div>
  );
};

export default App;

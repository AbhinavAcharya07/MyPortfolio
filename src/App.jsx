import React from "react";
import { ModeSwitcher } from "./contextApi.jsx";
import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
("./Navbar/Navbar.jsx");
const App = () => {
  const { color } = useContext(ModeSwitcher);
  return (
    <div className={color === "white" ? "appWhite" : "appBlack"}>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;

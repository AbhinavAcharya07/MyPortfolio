import React from "react";
import { useState } from "react";
import "./Navbar.css";
import "../index.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { Link } from "react-scroll";
const Navbar = ({ navResponse }) => {
  const [color, setcolor] = useState("white");
  const toggleTheme = () => {
    setcolor(color === "white" ? "black" : "white");
  };
  return (
    <div className={color === "white" ? "navbarWhite" : "navbarBlack"}>
      <header>
        <h1>Ab.</h1>
      </header>
      <ul>
        <Link
          activeClass={color === "white" ? "activeWhiteli" : "activeBlackli"}
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={color === "white" ? "navbarWhiteli" : "navbarBlackli"}
        >
          Home
        </Link>
        <Link
          activeClass={color === "white" ? "activeWhiteli" : "activeBlackli"}
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={color === "white" ? "navbarWhiteli" : "navbarBlackli"}
        >
          About
        </Link>
        <Link
          activeClass={color === "white" ? "activeWhiteli" : "activeBlackli"}
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={color === "white" ? "navbarWhiteli" : "navbarBlackli"}
        >
          Projects
        </Link>
        <Link
          activeClass={color === "white" ? "activeWhiteli" : "activeBlackli"}
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={color === "white" ? "navbarWhiteli" : "navbarBlackli"}
        >
          Contact
        </Link>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <button
        onClick={() => {
          toggleTheme();
          navResponse(color);
        }}
        className={color === "white" ? "whiteMode" : "blackMode"}
      >
        <img
          src={color === "black" ? sun : moon}
          alt="Theme toggle icon"
          id="icon"
        />
      </button>
    </div>
  );
};

export default Navbar;

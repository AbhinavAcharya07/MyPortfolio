import React from "react";
import { ModeSwitcher } from "../contextApi.jsx";
import { useContext } from "react";
import "./Navbar.css";
import "../index.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import menuWt from "../assets/menuWt.png";
import menuBlk from "../assets/menuBlk.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const { color, setColor } = useContext(ModeSwitcher);
  const toggleTheme = () => {
    setColor(color === "white" ? "black" : "white");
  };

  return (
    <div className={color === "white" ? "navbarWhite" : "navbarBlack"}>
      <header>
        <Link
          style={{ cursor: "pointer" }}
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <h1>Ab.</h1>
        </Link>
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
      </ul>
      <div className="NavBtn">
        <button
          onClick={() => {
            toggleTheme();
          }}
          className={color === "white" ? "whiteMode" : "blackMode"}
        >
          <img
            src={color === "black" ? sun : moon}
            alt="Theme toggle icon"
            id="icon"
          />
        </button>
        <button
          className={color === "white" ? "whiteMode" : "blackMode"}
          id="menu"
        >
          <img src={color === "black" ? menuWt : menuBlk} alt="" id="icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { ModeSwitcher } from "../contextApi.jsx";
import { useContext } from "react";
import "./Home.css";
import Download1 from "../assets/Dwn1.png";
import Download2 from "../assets/Dwn2.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import profile from "../assets/Profile.png";
import Resume from "../assets/Resume.pdf";
import { Link } from "react-scroll";

const Home = () => {
  const { color } = useContext(ModeSwitcher);
  const Downld1 = color === "white" ? Download2 : Download1;
  const Downld2 = color === "white" ? Download1 : Download2;
  const arrowR1 = color === "white" ? arrow1 : arrow2;
  const arrowR2 = color === "white" ? arrow2 : arrow1;
  return (
    <section id="intro">
      <div className="introContent">
        <span className={color === "white" ? "hiWhite" : "hiBlack"}>
          Hi There <br />
        </span>
        <span id="name">
          I'M ABHINAV <br />
          <br />
          <br />
        </span>
        <span id="dev">
          Developer
          <br />
          <br />
        </span>
        <span className="caption">
          Aspiring full-stack developer with hands-on experience in creating
          beautiful, animated user interfaces and scalable MERN stack
          applications.
        </span>
        <div className="btnWrapper">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="resume"
            id={color === "white" ? "resumeWhite" : "resumeBlack"}
          >
            <img src={arrowR1} className="bfhover" />
            <img src={arrowR2} className="hover" />
            Hire Me
          </Link>
          <a target="_blank" href={Resume}>
            <button
              className="resume"
              id={color === "white" ? "resumeWhite" : "resumeBlack"}
            >
              <img src={Downld1} alt="" className="bfhover" />
              <img src={Downld2} alt="" className="hover" />
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="Profile">
        <img src={profile} alt="image" className="bg" />
      </div>
    </section>
  );
};

export default Home;

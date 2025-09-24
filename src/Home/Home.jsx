import React from "react";
import "./Home.css";
import working from "../assets/working.png";
import working2 from "../assets/working2.png";
const Home = (props) => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className={props.appResponse === "white" ? "hiWhite" : "hiBlack"}>
          Hi There <br />
        </span>
        <span id="name">
          I'M ABHINAV <br />
          <br />
          <br />
        </span>
        <span id="dev">Developer</span>
      </div>
      <img
        src={props.appResponse === "white" ? working : working2}
        alt="image"
        className="bg"
      />
    </section>
  );
};

export default Home;

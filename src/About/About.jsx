import React from "react";
import "./About.css";
import school from "../assets/school.jpg";
import puc from "../assets/puc.jpg";
import college from "../assets/college.jpg";
const About = (props) => {
  return (
    <section id="about">
      <div
        className={
          props.appResponse === "white" ? "aboutTextWhite" : "aboutTextBlack"
        }
      >
        {" "}
        <h1
          id={
            props.appResponse === "white"
              ? "educationTextWhiteHead"
              : "educationTextBlackHead"
          }
        >
          My Education
        </h1>
        <br />
        <p>
          I am a B.tech Mechanical Engineering Graduate From Uvce.Being a
          Mechanical Engineering student with a strong interest in software
          development.My technical skills include front-end technologies like{" "}
          <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, as well as frameworks
          such as <b>React.js</b> and <b>Bootstrap</b>. I also have experience
          with back-end developmentusing <b>Node.js</b> and a foundational
          knowledge of <b>Java</b>. My database <br />
          skills include <b>SQL</b>, and I'm proficient in version control with{" "}
          <b>Git</b>. Additionally, I have strong data management skills with{" "}
          <b>Excel</b>.
        </p>
      </div>
      <div className="educationBars">
        <div
          className={
            props.appResponse === "white"
              ? "educationBarWhite"
              : "educationBarBlack"
          }
        >
          <img src={college} alt="" className="educationImg" />
          <div
            className={
              props.appResponse === "white"
                ? "educationTextWhite"
                : "educationTextBlack"
            }
          >
            <h1
              id={
                props.appResponse === "white"
                  ? "educationTextWhiteHead"
                  : "educationTextBlackHead"
              }
            >
              Graduation
            </h1>
            <p
              id={
                props.appResponse === "white"
                  ? "educationTextWhiteSpan"
                  : "educationTextBlackSpan"
              }
            >
              I am a B.Tech in Mechanical Engineering student at the University
              of Visvesvaraya College of Engineering, Bengaluru,with a CGPA of{" "}
              <b>7.28.</b>
            </p>
          </div>
        </div>
        <div
          className={
            props.appResponse === "white"
              ? "educationBarWhite"
              : "educationBarBlack"
          }
        >
          <img src={puc} alt="" className="educationImg" />
          <div
            className={
              props.appResponse === "white"
                ? "educationTextWhite"
                : "educationTextBlack"
            }
          >
            <h1
              id={
                props.appResponse === "white"
                  ? "educationTextWhiteHead"
                  : "educationTextBlackHead"
              }
            >
              Pre University (PUC)
            </h1>
            <p
              id={
                props.appResponse === "white"
                  ? "educationTextWhiteSpan"
                  : "educationTextBlackSpan"
              }
            >
              I completed my Pre-University education with a PCMB stream at SDP
              Temple PU College, Mandharthi, Udupi, with a percentage of{" "}
              <b>93.16%.</b>
            </p>
          </div>
        </div>
        <div
          className={
            props.appResponse === "white"
              ? "educationBarWhite"
              : "educationBarBlack"
          }
        >
          <img src={school} alt="" className="educationImg" />
          <div
            className={
              props.appResponse === "white"
                ? "educationTextWhite"
                : "educationTextBlack"
            }
          >
            <h1
              id={
                props.appResponse === "white"
                  ? "educationTextWhiteHead"
                  : "educationTextBlackHead"
              }
            >
              Class 10 (SSLC)
            </h1>
            <p
              id={
                props.appResponse === "white"
                  ? "educationTextWhiteSpan"
                  : "educationTextBlackSpan"
              }
            >
              I completed my Class 10 at Karnataka Public School Kokkarne,
              Udupi, with a percentage of <b>91.36%.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

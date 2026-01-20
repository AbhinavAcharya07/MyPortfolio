import React from "react";
import { ModeSwitcher } from "../contextApi.jsx";
import { useContext } from "react";
import "./About.css";
import school from "../assets/school.jpg";
import puc from "../assets/puc.jpg";
import college from "../assets/college.jpg";
import SSLC from "../assets/SSLC.pdf";
import PUC from "../assets/PUC.pdf";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "motion/react";
const About = () => {
  const { color } = useContext(ModeSwitcher);
  const educationTextHead =
    color === "white" ? "educationTextWhiteHead" : "educationTextBlackHead";
  const educationBarDiv =
    color === "white" ? "educationBarWhite" : "educationBarBlack";
  const educationText =
    color === "white" ? "educationTextWhite" : "educationTextBlack";
  // const educationTextPara =
  //   color === "white"
  //     ? "educationTextWhiteSpan"
  //     : "educationTextBlackSpan";
  return (
    <section id="about">
      <div className={color === "white" ? "aboutTextWhite" : "aboutTextBlack"}>
        {" "}
        <h1 id={educationTextHead}>My Education</h1>
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className={educationBarDiv}
        >
          <div className="CnImg">
            <img src={college} alt="" className="educationImg" />
          </div>
          <div className={educationText}>
            <h1 id={educationTextHead}>Graduation</h1>
            <p>
              I am a B.Tech in Mechanical Engineering student at the University
              of Visvesvaraya College of Engineering, Bengaluru,with a CGPA of{" "}
              <b>7.8</b>.
            </p>
            <a href="" target="blank">
              <button
                className="Marks"
                id={color === "white" ? "MarksWhite" : "MarksBlack"}
              >
                <FaFilePdf />
                Marks
              </button>
            </a>
          </div>
          <div className="Rightline"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className={educationBarDiv}
        >
          <div className="CnImg">
            <img src={puc} alt="" className="educationImg" />
          </div>
          <div className={educationText}>
            <h1 id={educationTextHead}>Pre University (PUC)</h1>
            <p
            // id={educationTextPara}
            >
              I completed my Pre-University education with a PCMB stream at SDP
              Temple PU College, Mandharthi, Udupi, with a percentage of{" "}
              <b>93.16%.</b>
            </p>
            <a href={PUC} target="blank">
              <button
                className="Marks"
                id={color === "white" ? "MarksWhite" : "MarksBlack"}
              >
                <FaFilePdf />
                Marks
              </button>
            </a>
          </div>
          <span className="Rightline"></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          className={educationBarDiv}
        >
          <div className="CnImg">
            <img src={school} alt="" className="educationImg" />
          </div>
          <div className={educationText}>
            <h1 id={educationTextHead}>Class 10 (SSLC)</h1>
            <p>
              I completed my Class 10 at Karnataka Public School Kokkarne,
              Udupi, with a percentage of <b>91.36%.</b>
            </p>
            <a href={SSLC} target="blank">
              <button
                className="Marks"
                id={color === "white" ? "MarksWhite" : "MarksBlack"}
              >
                <FaFilePdf />
                Marks
              </button>
            </a>
          </div>
          <span className="Rightline"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

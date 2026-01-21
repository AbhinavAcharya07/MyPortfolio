import React from "react";
import "./Project.css";
import CryptoPlace from "../assets/CryptoPlace.png";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
const Project2 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      whileHover={{ scale: 1.07 }}
      transition={{
        duration: 2,
        delay: 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={props.projectBar}
    >
      <div className="project1Imgs">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          src={CryptoPlace}
          alt=""
          className="projectImg2"
        />
      </div>
      <div className={props.projectText}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <h1 id={props.projectTextHead}>CryptoPlace</h1>
          <div className="GDBtn">
            <a
              id="plink3"
              href="https://github.com/AbhinavAcharya07/CryptoPlace.git"
              target="_blank"
              style={{ color: "red" }}
            >
              <button className="DemoBtn" id={props.DemoBtn}>
                <BsGithub />
                Github
              </button>
            </a>
            <a
              id="plink3"
              href="https://crypto-place-m4u0k45sz-abhinavs-projects-dff478f0.vercel.app/"
              target="_blank"
              style={{ color: "red" }}
            >
              <button className="DemoBtn" id={props.DemoBtn}>
                <FaArrowUpRightFromSquare />
                Live Demo
              </button>
            </a>
          </div>
        </div>
        <p id={props.projectTextPara}>
          <b>Objective of the project:</b> Built and deployed a dynamic
          cryptocurrency dashboard, "CryptoPlace," using React to provide users
          with up-to-the-minute market data. Implemented core features such as
          fetching and displaying the top 10 coins from the <b>CoinGecko API</b>
          , showing percentage changes in real-time with color-coded indicators,
          and enabling searches for specific currencies. Utilized React Router
          for seamless navigation to individual coin pages, which feature a
          detailed price history chart created with <b>React Google Charts</b>.{" "}
          <br />
          <b>Language used:</b> <br />
          React. <br />
          <b>Dependencies used:</b> <br />
          CoinGecko API, React Google Charts.
        </p>
      </div>
    </motion.div>
  );
};

export default Project2;

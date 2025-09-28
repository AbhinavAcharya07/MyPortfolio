import React from "react";
import "./Project.css";
import CryptoPlace from "../assets/CryptoPlace.png";
import { motion } from "motion/react";
const Project2 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      whileHover={{ scale: 1.07 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={props.projectBar}
    >
      <img src={CryptoPlace} alt="" className="projectImg2" />
      <div className={props.projectText}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 id={props.projectTextHead}>CryptoPlace</h1>
          <a
            id="plink3"
            href="https://github.com/AbhinavAcharya07/CryptoPlace"
            target="_blank"
            style={{ color: "red" }}
          >
            GitrepoLink
          </a>
        </div>
        <p id={props.projectTextPara}>
          Built and deployed a dynamic cryptocurrency dashboard, "CryptoPlace,"
          using React to provide users with up-to-the-minute market data.
          Implemented core features such as fetching and displaying the top 10
          coins from the <b>CoinGecko API</b>, showing percentage changes in
          real-time with color-coded indicators, and enabling searches for
          specific currencies. Utilized React Router for seamless navigation to
          individual coin pages, which feature a detailed price history chart
          created with <b>React Google Charts</b>. <br />
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

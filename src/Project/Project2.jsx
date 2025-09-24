import React from "react";
import "./Project.css";
import CryptoPlace from "../assets/CryptoPlace.png";
const Project2 = (props) => {
  return (
    <div
      className={
        props.appResponse === "white" ? "projectBarWhite" : "projectBarBlack"
      }
    >
      <img src={CryptoPlace} alt="" className="projectImg2" />
      <div
        className={
          props.appResponse === "white"
            ? "projectTextWhite"
            : "projectTextBlack"
        }
      >
        <h1
          id={
            props.appResponse === "white"
              ? "projectTextWhiteHead"
              : "projectTextBlackHead"
          }
        >
          CryptoPlace
        </h1>
        <p
          id={
            props.appResponse === "white"
              ? "projectTextWhiteSpan"
              : "projectTextBlackSpan"
          }
        >
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
    </div>
  );
};

export default Project2;

import React from "react";
import "./Project.css";
import rideVista from "../assets/rideVista.png";
const Project1 = (props) => {
  return (
    <div
      className={
        props.appResponse === "white" ? "projectBarWhite" : "projectBarBlack"
      }
    >
      <img src={rideVista} alt="" className="projectImg1" />
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
          RideVista
        </h1>
        <p
          id={
            props.appResponse === "white"
              ? "projectTextWhiteSpan"
              : "projectTextBlackSpan"
          }
        >
          <b>Objective of the project:</b> To provide convenient, reliable, and
          affordable transportation solutions, connecting users with a network
          of drivers for hassle-free rides across various Tier-3 Locations.
          Through seamless technology integration and a user-friendly interface.{" "}
          <br />
          <b>Language used:</b> <br />
          <b>Front end:</b>HTML,CSS,JAVASCRIPT. <br />
          <b>Back-end:</b>PHP,MYSQL.
        </p>
      </div>
    </div>
  );
};

export default Project1;

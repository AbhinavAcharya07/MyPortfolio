import React from "react";
import "./Project.css";
import rideVista from "../assets/rideVista.png";
import { motion } from "motion/react";
const Project1 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
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
      <img src={rideVista} alt="" className="projectImg1" />
      <div className={props.projectText}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 id={props.projectTextHead}>RideVista</h1>
          <a
            id="plink3"
            href="https://github.com/AbhinavAcharya07/ridevista"
            target="_blank"
            style={{ color: "red" }}
          >
            GitrepoLink
          </a>
        </div>
        <p id={props.projectTextPara}>
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
    </motion.div>
  );
};

export default Project1;

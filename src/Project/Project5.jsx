import React from "react";
import "./Project.css";
import Sms1 from "../assets/Sms1.png";
import Sms2 from "../assets/Sms2.png";
import { motion, wrap } from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
const Project5 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      whileHover={{ scale: 1.07 }}
      transition={{
        duration: 2,
        ease: "easeOut",
        delay: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={props.projectBar}
    >
      {" "}
      <div className="project1Imgs">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          src={Sms1}
          alt=""
          className="projectImg1"
        />
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          src={Sms2}
          alt=""
          className="projectImg1"
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
          <h1 id={props.projectTextHead}>AutoTrack</h1>
          <div className="GDBtn">
            <a
              id="plink3"
              href="https://github.com/AbhinavAcharya07/Vehicle-SMS"
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
              href="https://vehicle-sms-xnys.vercel.app"
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
          <b>Objective of the project:</b> A production-ready, role-based{" "}
          <b>full-stack</b> vehicle service tracking and management platform
          designed to optimize workflow transparency between car owners and
          automotive maintenance teams. Built with <b>React</b> (Vite) on the
          frontend and a robust <b>Node.js + Express.js RESTful API </b> on the
          backend, the application modernizes the traditional garage experience
          by digitizing the entire repair lifecycle. The system provides an
          interactive, secure portal where customers track real-time servicing
          milestones, access localized vehicle histories, and review transparent
          cost breakdowns. On the administrative side, workshop staff can
          dynamically generate operational <b>Job Cards </b>, assign service
          technicians, and log real-time vehicle progress. Features a secure,
          two-sided verification payment reconciliation model and automated
          profile protection routines to ensure absolute operational
          synchronicity and data integrity.
          <br />
          <b>Language used:</b> <br />
          <b>Front end:</b>React.js, JavaScript, Tailwind CSS <br />
          <b>Back-end:</b>Node.js, Express.js <br />
          <b>Database:</b>MongoDB <br />
          <b>Integration:</b>Gmail SMTP Service
        </p>
      </div>
    </motion.div>
  );
};

export default Project5;

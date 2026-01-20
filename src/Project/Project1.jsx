import React from "react";
import "./Project.css";
import toDo from "../assets/toDo.png";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Project1 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      whileHover={{ scale: 1.07 }}
      transition={{
        delay: 0.1,
        duration: 2,
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
          src={toDo}
          alt=""
          className="projectImg3"
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
          <h1 id={props.projectTextHead}>React-based To-Do Application</h1>
          <a
            id="plink3"
            href="https://abhinavacharya07.github.io/Abhinav-TodoApp/"
            target="_blank"
          >
            <button className="DemoBtn" id={props.DemoBtn}>
              <FaArrowUpRightFromSquare />
              Live Demo
            </button>
          </a>
        </div>
        <p id={props.projectTextPara}>
          <b>Objective of the project:</b> Created and deployed a dynamic To-Do
          web application using <b>React</b> to enhance user productivity.
          Implemented key functionalities such as creating, deleting, and
          editing tasks, alongside a feature to assign date-based reminders that
          display in a list view. <br />
          <b>Language used:</b> <br />
          React.
        </p>
      </div>
    </motion.div>
  );
};

export default Project1;

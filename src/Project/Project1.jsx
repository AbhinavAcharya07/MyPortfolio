import React from "react";
import "./Project.css";
import toDo from "../assets/toDo.png";
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
      <img src={toDo} alt="" className="projectImg3" />
      <div className={props.projectText}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 id={props.projectTextHead}>React-based To-Do Application</h1>
          <a
            id="plink3"
            href="https://abhinavacharya07.github.io/Abhinav-TodoApp/"
            target="_blank"
            style={{ color: "red" }}
          >
            todoapp.com
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

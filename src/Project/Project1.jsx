import React from "react";
import "./Project.css";
import myNotes1 from "../assets/myNotes1.png";
import myNotes from "../assets/myNotes.png";
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
      {" "}
      <div className="project1Imgs">
        <img src={myNotes1} alt="" className="projectImg1" />
        <img src={myNotes} alt="" className="projectImg1" />
      </div>
      <div className={props.projectText}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 id={props.projectTextHead}>MyNotes</h1>
          <a
            id="plink3"
            href="https://question-bank-gbs8.vercel.app/"
            target="_blank"
            style={{ color: "red" }}
          >
            mynotes.com
          </a>
        </div>
        <p id={props.projectTextPara}>
          <b>Objective of the project:</b> MyNotes is a dynamic, responsive
          question bank web application designed to empower users to
          create,manage and revise technical notes efficiently with intelligent,
          AI-powered search capabilities.Built using the MERN stack, the
          platform delivers a seamless full-stack experience with RESTful APIs
          developed in Node.js + Express.js and secure, schema-based data
          storage powered by MongoDB with Mongoose ODM.It supports complete CRUD
          operations–enabling users to effortlessly create, read, update and
          delete structured notes with fields for Topic, Question and Answer.The
          integration of Google Gemini Generative AI API enables real-time
          semantic search and Q/A assistance.To enhance user experience,loading
          skeleton animations are implemented during asynchronous API calls,
          ensuring smooth perceived performance. <br />
          <b>Language used:</b> <br />
          <b>Front end:</b>React.js, JavaScript, CSS <br />
          <b>Back-end:</b>Node.js, Express.js <br />
          <b>Database:</b>MongoDB <br />
          <b>API Integration:</b>Gemini AI API
        </p>
      </div>
    </motion.div>
  );
};

export default Project1;

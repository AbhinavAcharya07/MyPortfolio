import React from "react";
import "./Project.css";
import productReview from "../assets/productReview.png";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
const Project4 = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
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
      <div className="project1Imgs">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          src={productReview}
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
          <h1 id={props.projectTextHead}>TwilioProductReview</h1>
          <div className="GDBtn">
            <a
              id="plink3"
              href="https://github.com/AbhinavAcharya07/TwilioReviewProduct.git"
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
              href="https://twilio-review-product.vercel.app/"
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
          <b>Objective of the project:</b> A production-ready <b>full-stack</b>{" "}
          web application that automates real-time customer feedback collection
          directly through WhatsApp using Twilio’s programmable messaging{" "}
          <b>API</b>. Built with <b>React</b> (Vite) on the frontend and{" "}
          <b>Node.js</b> serverless functions on <b>Vercel</b> as the backend,
          the system enables businesses to instantly request, receive, and
          publicly display verified customer reviews through an intelligent
          conversational WhatsApp bot.Secure storage of reviews (product name,
          customer name, phone, review text, timestamp) in a fully managed{" "}
          <b>PostgreSQL</b> database on <b>Neon.tech</b>.Robust{" "}
          <b>RESTful API</b> with <b>CORS</b> protection, error handling, and
          environment-based configuration.Multi-step WhatsApp chatbot powered by{" "}
          <b>Twilio webhooks</b> for seamless review collection. <br />
          <b>Language used:</b> <br />
          <b>Front end:</b>React.js, JavaScript, CSS <br />
          <b>Back-end:</b>Node.js, Express.js <br />
          <b>Database:</b>PostgreSQL <br />
        </p>
      </div>
    </motion.div>
  );
};

export default Project4;

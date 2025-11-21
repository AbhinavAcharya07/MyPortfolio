import React from "react";
import "./Project.css";
import productReview from "../assets/productReview.png";
import { motion } from "motion/react";
const Project4 = (props) => {
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
      <img src={productReview} alt="" className="projectImg2" />
      <div className={props.projectText}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 id={props.projectTextHead}>TwilioProductReview</h1>
          <a
            id="plink3"
            href="https://twilio-review-product.vercel.app/"
            target="_blank"
            style={{ color: "red" }}
          >
            twilioproductreview.com
          </a>
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

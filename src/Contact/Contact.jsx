import React, { useRef, useState } from "react";
import { ModeSwitcher } from "../contextApi.jsx";
import { useContext } from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const { color } = useContext(ModeSwitcher);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_dpmi0dc", "template_y1zrxsk", form.current, {
        publicKey: "AoSvO05trRnKimqFU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className={color === "white" ? "contactWhite" : "contactBlack"}>
        Contact Me
      </h1>
      <div className="contactText">
        Please fill out the form below to contact me.{" "}
      </div>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className={color === "white" ? "nameWhite" : "nameBlack"}
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className={color === "white" ? "emailWhite" : "emailBlack"}
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className={color === "white" ? "msgWhite" : "msgBlack"}
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <div>
          <button
            type="submit"
            value="Send"
            className={color === "white" ? "submitWhite" : "submitBlack"}
          >
            Submit
          </button>
        </div>
      </form>
      <div id="gitLi">
        <a href="https://github.com/AbhinavAcharya07" target="_blank">
          <button className={color === "white" ? "gitLiWhite" : "gitLiBlack"}>
            <FaGithub />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/abhinav-acharya-7b0634378"
          target="_blank"
        >
          <button className={color === "white" ? "gitLiWhite" : "gitLiBlack"}>
            <FaLinkedinIn />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;

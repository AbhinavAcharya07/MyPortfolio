import React, { useRef, useState } from "react";
import { ModeSwitcher } from "../contextApi.jsx";
import { useContext } from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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
        },
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
      <form
        className="form"
        ref={form}
        onSubmit={sendEmail}
        id={color === "white" ? "formWhite" : "formBlack"}
      >
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
      <div className="details">
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTPKtQmqgNpCjrWFQzmJlBhGSpDvVcJSrRRwbBtpwkpMScPDKTFdWnrHzCDkjXJZbQhtCml"
        >
          <SiGmail /> abhinavachar235@gmail.com
        </a>
        <a>
          <FaPhoneAlt /> +91 6360700659
        </a>
        <a target="_blank" href="https://maps.app.goo.gl/2H5S4mtnaHX9zJMi8">
          <FaLocationDot /> Bengaluru, India
        </a>
      </div>
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
        <a href="https://www.instagram.com/acharya_abhi_07" target="_blank">
          <button className={color === "white" ? "gitLiWhite" : "gitLiBlack"}>
            <GrInstagram />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;

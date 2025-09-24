import React from "react";
import "./Footer.css";
import { useState } from "react";
const Footer = (props) => {
  //const [color, setcolor] = useState("white");
  //   const toggleTheme = () => {
  //     setcolor(props.appResponse === "white" ? "black" : "white");
  //   };
  return (
    <footer
      className={props.appResponse === "white" ? "footerWhite" : "footerBlack"}
    >
      Copyright &#169; 2025 Abhinav Acharya. All right received.
    </footer>
  );
};

export default Footer;

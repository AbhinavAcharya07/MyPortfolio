import React from "react";
import { ModeSwitcher } from "../contextApi.jsx";
import { useContext } from "react";
import "./Footer.css";
import { useState } from "react";
const Footer = () => {
  const { color } = useContext(ModeSwitcher);
  //const [color, setcolor] = useState("white");
  //   const toggleTheme = () => {
  //     setcolor(color === "white" ? "black" : "white");
  //   };
  return (
    <footer className={color === "white" ? "footerWhite" : "footerBlack"}>
      Copyright &#169; 2026 Abhinav Acharya. All right received.
    </footer>
  );
};

export default Footer;

import React from "react";
import { ModeSwitcher } from "../contextApi.jsx";
import { useContext } from "react";
import "./Project.css";
import Project1 from "./Project1.jsx";
import Project2 from "./Project2.jsx";
import Project3 from "./Project3.jsx";
import Project4 from "./Project4.jsx";
const Project = () => {
  const { color } = useContext(ModeSwitcher);
  const projectBar = color === "white" ? "projectBarWhite" : "projectBarBlack";
  const projectText =
    color === "white" ? "projectTextWhite" : "projectTextBlack";
  const projectTextHead =
    color === "white" ? "projectTextWhiteHead" : "projectTextBlackHead";
  const projectTextPara =
    color === "white" ? "projectTextWhiteSpan" : "projectTextBlackSpan";
  return (
    <section id="project">
      <div
        className={color === "white" ? "ProjectTextWhite" : "ProjectTextBlack"}
      >
        {" "}
        <h1
          id={
            color === "white" ? "projectTextWhiteHead" : "projectTextBlackHead"
          }
        >
          My Projects
        </h1>
        <br />
        <p>
          To secure a challenging position in a progressive organization that
          offers opportunities for advancement, where I can utilize my skills in
          Mechanical Engineering to contribute to the company's growth and gain
          valuable experience in the field. <b>My Skills:</b> JAVA, HTML, CSS,
          JAVASCRIPT, POSTGRESQL, REACT.JS, NODE.JS, EXPRESS.JS, MONGODB,
          RESTFUL APIs, TAILWIND CSS, BOOTSRAP.
        </p>
      </div>
      <div className="projectBars">
        <Project4
          projectBar={projectBar}
          projectText={projectText}
          projectTextHead={projectTextHead}
          projectTextPara={projectTextPara}
        ></Project4>
        <Project3
          projectBar={projectBar}
          projectText={projectText}
          projectTextHead={projectTextHead}
          projectTextPara={projectTextPara}
        ></Project3>
        <Project2
          projectBar={projectBar}
          projectText={projectText}
          projectTextHead={projectTextHead}
          projectTextPara={projectTextPara}
        ></Project2>
        <Project1
          projectBar={projectBar}
          projectText={projectText}
          projectTextHead={projectTextHead}
          projectTextPara={projectTextPara}
        ></Project1>
      </div>
    </section>
  );
};

export default Project;

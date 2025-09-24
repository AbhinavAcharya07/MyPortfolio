import React from "react";
import "./Project.css";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
const Project = (props) => {
  return (
    <section id="project">
      <div
        className={
          props.appResponse === "white"
            ? "ProjectTextWhite"
            : "ProjectTextBlack"
        }
      >
        {" "}
        <h1
          id={
            props.appResponse === "white"
              ? "projectTextWhiteHead"
              : "projectTextBlackHead"
          }
        >
          My Projects
        </h1>
        <br />
        <p>
          To secure a challenging position in a progressive organization that
          offers opportunities for advancement, where I can utilize my skills in
          Mechanical Engineering to contribute to the company's growth and gain
          valuable experience in the field. <b>My Skills:</b> JAVA,HTML, CSS,
          JAVASCRIPT, SQL, REACT.JS, NODE.JS, TAILWIND CSS, BOOTSRAP.
        </p>
      </div>
      <div className="projectBars">
        <Project1 appResponse={props.appResponse}></Project1>
        <Project2 appResponse={props.appResponse}></Project2>
        <Project3 appResponse={props.appResponse}></Project3>
      </div>
    </section>
  );
};

export default Project;

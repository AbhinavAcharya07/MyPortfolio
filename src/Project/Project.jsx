import React from "react";
import "./Project.css";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
const Project = (props) => {
  const projectBar =
    props.appResponse === "white" ? "projectBarWhite" : "projectBarBlack";
  const projectText =
    props.appResponse === "white" ? "projectTextWhite" : "projectTextBlack";
  const projectTextHead =
    props.appResponse === "white"
      ? "projectTextWhiteHead"
      : "projectTextBlackHead";
  const projectTextPara =
    props.appResponse === "white"
      ? "projectTextWhiteSpan"
      : "projectTextBlackSpan";
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
        <Project1
          projectBar={projectBar}
          projectText={projectText}
          projectTextHead={projectTextHead}
          projectTextPara={projectTextPara}
        ></Project1>
        <Project2
          projectBar={projectBar}
          projectText={projectText}
          projectTextHead={projectTextHead}
          projectTextPara={projectTextPara}
        ></Project2>
        <Project3
          projectBar={projectBar}
          projectText={projectText}
          projectTextHead={projectTextHead}
          projectTextPara={projectTextPara}
        ></Project3>
      </div>
    </section>
  );
};

export default Project;

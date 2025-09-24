import React from "react";
import "./Project.css";
import toDo from "../assets/toDo.png";
const Project3 = (props) => {
  return (
    <div
      className={
        props.appResponse === "white" ? "projectBarWhite" : "projectBarBlack"
      }
    >
      <img src={toDo} alt="" className="projectImg3" />
      <div
        className={
          props.appResponse === "white"
            ? "projectTextWhite"
            : "projectTextBlack"
        }
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1
            id={
              props.appResponse === "white"
                ? "projectTextWhiteHead"
                : "projectTextBlackHead"
            }
          >
            React-based To-Do Application
          </h1>
          <a
            id="plink3"
            href="https://abhinavacharya07.github.io/Abhinav-TodoApp/"
            target="_blank"
            style={{ color: "red" }}
          >
            todoapp.com
          </a>
        </div>
        <p
          id={
            props.appResponse === "white"
              ? "projectTextWhiteSpan"
              : "projectTextBlackSpan"
          }
        >
          Created and deployed a dynamic To-Do web application using{" "}
          <b>React</b> to enhance user productivity. Implemented key
          functionalities such as creating, deleting, and editing tasks,
          alongside a feature to assign date-based reminders that display in a
          list view. <br />
          <b>Language used:</b> <br />
          React.
        </p>
      </div>
    </div>
  );
};

export default Project3;

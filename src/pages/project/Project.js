import React from "react";
import "./project.scss";
import { PiFilesThin } from "react-icons/pi";
import projectsData from "./projects";
import ScrollAnimation from "react-animate-on-scroll";
import "../../utils/animation.css";

function Project() {
  return (
    <div className="project" id="project">
      <ScrollAnimation
        animateIn="animate__slideInDown"
        duration={1}
        animatePreScroll={false}
      >
        <div className="head">
          <PiFilesThin className="icon" />
          <h2 className="heading">
            Project<span className=" st2">'s</span>
          </h2>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__flipInX"
        duration={2}
        offset={500}
        animatePreScroll={false}
      >
        <div className="projects container">
          {projectsData.map((item) => (
            <div className="project-parent" key={item.id}>
              <div className="project-box">
                <div className="image-box">
                  <img src={item.image} alt="data not found" />
                </div>
                <div className="project-text">
                  <h3>{item.title}</h3>
                  <div className="button-box">
                    <a
                      className="btn btn1"
                      href={item.view}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View
                    </a>
                    <a
                      className="btn btn2"
                      href={item.code}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Project;

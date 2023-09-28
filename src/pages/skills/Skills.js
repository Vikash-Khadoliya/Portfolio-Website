import React from "react";
import "./skills.scss";
import skillData from "./data";
import { SiMinds } from "react-icons/si";
import ScrollAnimation from "react-animate-on-scroll";
import "../../utils/animation.css";

function Skills() {
  return (
    <div className="skill center" id="skill">
      <ScrollAnimation
        animateIn="animate__slideInDown"
        duration={1}
        animatePreScroll={false}
      >
        <div className="head">
          <SiMinds className="icon" />
          <h2 className="heading">
            Skill<span className="st2">'s</span>
          </h2>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__zoomIn"
        duration={1.5}
        offset={50}
        animatePreScroll={false}
      >
        <div className="skills  container ">
          {skillData.map((item) => {
            return (
              <div key={item.id} className="skill-box">
                <div className="skill-card">
                  <img src={item.img} alt="MISSING" />
                </div>
                <div className="skill-text">
                  <h3 className="heading">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Skills;

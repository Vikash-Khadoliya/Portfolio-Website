import React from "react";
import "./skills.scss";
import skillData from "./data";
import { SiMinds } from "react-icons/si";
import { Bounce, Zoom } from "react-awesome-reveal";

function Skills() {
  return (
    <div className="skill center" id="skill">
      <Bounce duration={1000}>
        <div className="head ">
          <SiMinds className="icon" />
          <h2 className="heading">
            Skill<span className="st2">'s</span>
          </h2>
        </div>
      </Bounce>
      <Zoom duration={1500}>
        <div className="skills  container ">
          {skillData.map((item) => {
            return (
              <div key={item.id} className="skill-box">
                <div className="skill-card">
                  <img src={item.img} alt="skill data not found" />
                </div>
                <div className="skill-text">
                  <h3 className="heading">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </Zoom>
    </div>
  );
}

export default Skills;

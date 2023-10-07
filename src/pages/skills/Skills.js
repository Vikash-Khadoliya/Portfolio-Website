import React from "react";
import "./skills.scss";
import skillData from "./data";
import { SiMinds } from "react-icons/si";

function Skills() {
  return (
    <div className="skill center" id="skill">
      <div className="head">
        <SiMinds className="icon" />
        <h2 className="heading">
          Skill<span className="st2">'s</span>
        </h2>
      </div>
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
    </div>
  );
}

export default Skills;

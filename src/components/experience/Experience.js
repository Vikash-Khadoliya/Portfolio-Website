import React from "react";
import "./experience.scss";
import { FaToolbox } from "react-icons/fa";
import { ImArrowUpRight, ImArrowUpLeft } from "react-icons/im";

function Experience() {
  return (
    <div className="experience container">
      <div className="head">
        <FaToolbox className="icon" />
        <h2 className="heading">
          Experience<span className="st2">'s</span>
        </h2>
      </div>

      <div className="ex-box">
        <div className="icon-box">
          <FaToolbox className="logo" />

          <div className="left-box box">
            <ImArrowUpLeft className="logo2" />
            <h3 className="heading">Currently Self-Employed</h3>
            <h4>MERN Stack Developer</h4>
            <p className="st05">2021 - Present</p>
          </div>
        </div>

        <div className="icon-box2 ">
          <FaToolbox className="logo" />

          <div className="right-box box">
            <ImArrowUpRight className="logo2" />
            <h3 className="heading">Work on Freelancer</h3>
            <p className="st05">Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

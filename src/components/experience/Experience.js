import React from "react";
import "./experience.scss";
import { FaToolbox } from "react-icons/fa";
import { ImArrowUpRight, ImArrowUpLeft } from "react-icons/im";
import ScrollAnimation from "react-animate-on-scroll";
import "../../utils/animation.css";

function Experience() {
  return (
    <div className="experience container">
      <ScrollAnimation
        animateIn="animate__slideInDown"
        duration={1}
        animatePreScroll={false}
      >
        <div className="head">
          <FaToolbox className="icon" />
          <h2 className="heading">
            Experience<span className="st2">'s</span>
          </h2>
        </div>
      </ScrollAnimation>

      <div className="ex-box">
        <ScrollAnimation animateIn="animate__fadeInUpBig" duration={2}>
          <div className="icon-box">
            <FaToolbox className="logo" />

            <div className="left-box box">
              <ImArrowUpLeft className="logo2" />
              <h3 className="heading">Currently Self-Employed</h3>
              <h4>MERN Stack Developer</h4>
              <p className="st05">2021 - Present</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeInUpBig" duration={1.5}>
          <div className="icon-box2 ">
            <FaToolbox className="logo" />

            <div className="right-box box">
              <ImArrowUpRight className="logo2" />
              <h3 className="heading">Work on Freelancer</h3>
              <p className="st05">Present</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import "./aboutus.scss";
import { BsFillPersonFill } from "react-icons/bs";
import ownerpic from "../../Assets/user.png";

import ScrollAnimation from "react-animate-on-scroll";
import "../../utils/animation.css";

function AboutUs() {
  return (
    <div className="about" id="about">
      <ScrollAnimation
        animateIn="animate__slideInDown"
        duration={1}
        animatePreScroll={false}
      >
        <div className="head">
          <BsFillPersonFill className="icon" />
          <h2 className="heading">
            About <span className="st2">Me</span>
          </h2>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__flipInX"
        duration={2.5}
        animatePreScroll={false}
      >
        <div className="container data">
          <div className="img-box">
            <img src={ownerpic} alt="Photo Missing" />
          </div>

          <div className="content">
            <h3 className="pad1 center-heading">I'm Mukesh Kumawat</h3>
            <h4 className="center-heading">MERN Stack Developer</h4>
            <p className="pad2">
              Hii, I am a MERN Stack developer based in Rajasthan, India. I am
              an undergraduate student of the Bachelor of Computer Application
              at Seth G.B. Podar College, Nawalgarh (Raj.). I am very passionate
              about improving my coding skills and developing applications and
              websites. I build web apps and website projects using the MERN
              stack. Currently, I am self-employed and working on myself to
              improve my skills.
            </p>
            <h4 className="pad1">
              <span className="st1">Email :</span> mukeshkumawatb5@gmail.com
            </h4>
            <h4>
              <span className="st1">Place :</span> Jhunjhunu, (Raj.), India
            </h4>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default AboutUs;

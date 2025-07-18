import React from "react";
import "./aboutus.scss";
import { BsFillPersonFill } from "react-icons/bs";
import ownerpic from "../../Assets/user.png";
import { Bounce, JackInTheBox } from "react-awesome-reveal";

function AboutUs() {
  return (
    <div className="about" id="about">
      <Bounce duration={1000} delay={50}>
        <div className="head">
          <BsFillPersonFill className="icon" />
          <h2 className="heading">
            About <span className="st2">Me</span>
          </h2>
        </div>
      </Bounce>

      <div className="container data">
        <JackInTheBox duration={1500}>
          <div className="img-box">
            <img src={ownerpic} alt="user data missing" />
          </div>
        </JackInTheBox>

        <div className="content">
          <JackInTheBox duration={1500}>
            <h3 className="pad1 center-heading">I'm Vikash Khadoliya</h3>
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
              <span className="st1">Email :</span> Khadoliyavikash@gmail.com
            </h4>
            <h4>
              <span className="st1">Place :</span> Jhunjhunu, (Raj.), India
            </h4>
          </JackInTheBox>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

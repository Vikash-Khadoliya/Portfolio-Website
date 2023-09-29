import React from "react";
import "./hero.scss";
import Typed from "react-typed";
import ownerImg from "../../Assets/user.png";
import Social from "../social-media/Social";

const stringsToRender = [
  "Web Designer",
  "Forntend Developer",
  "Backend Developer",
  "MERN Stack Developer",
];

function Hero() {
  return (
    <div className="container hero-box">
      <div className="hero">
        <div className="content">
          <div className="header">
            <h1 className="heading">Hello,</h1>
          </div>
          <div className="name">
            <h2 className="user-name">I'm Mukesh Kumawat</h2>
          </div>
          <div className="detail">
            <h2 className="work-detail">
              I'm a{" "}
              <Typed
                className="render-strings"
                strings={stringsToRender}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </h2>
          </div>
          <div className="button">
            <a
              href="https://drive.google.com/file/d/1xpTJH5cdhPea3V1d6CW00DP18cXPua2G/view?usp=sharing"
              className="btn"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src={ownerImg} alt="Owner Image" />
        </div>
      </div>

      <Social />
    </div>
  );
}

export default Hero;

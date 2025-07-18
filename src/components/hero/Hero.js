import React from "react";
import "./hero.scss";
import ownerImg from "../../Assets/user.png";
import Social from "../social-media/Social";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="container hero-box">
      <div className="hero">
        <div className="content">
          <div className="header">
            <h1 className="heading">Hello,</h1>
          </div>
          <div className="name">
            <h2 className="user-name">I'm Vikash Khadoliya</h2>
          </div>
          <div className="detail">
            <h2 className="work-detail">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  1000,
                  "Web Designer",
                  1000,
                  "Forntend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                className="render-strings"
                repeat={Infinity}
              />
            </h2>
          </div>
          <div className="button">
            <a
              href="https://drive.google.com/file/d/1FjXpdyKpj-S9N8s9SGTYxQUvNqSEEdWw/view?usp=sharing"
              className="btn"
              rel="noreferrer noopener"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src={ownerImg} alt="user portfolio" />
        </div>
      </div>

      <Social />
    </div>
  );
}

export default Hero;

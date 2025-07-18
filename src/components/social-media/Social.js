import React from "react";
import "./social.scss";
import { BsTelegram } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

function Social() {
  return (
    <div className="social">
      <div className="social-icon">
        <ul className="icon-list">
          <li className="list">
            <a
              href="https://www.linkedin.com/in/codewithvikash-584660292"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="list">
            <a
              href="https://github.com/Vikash-Khadoliya"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <FaSquareGithub />
            </a>
          </li>
          <li className="list">
            <a
              href="https://whatsapp.com/channel/0029VaBChYa2f3ENzSwHTY1v"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <FaSquareWhatsapp />
            </a>
          </li>

          <li className="list">
            <a
              href="https://t.me/codewithveekas"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <BsTelegram />
            </a>
          </li>
          <li className="list">
            <a
              href="https://www.facebook.com/profile.php?id=61552711176415&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Social;

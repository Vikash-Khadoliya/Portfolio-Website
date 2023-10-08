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
              href="https://www.linkedin.com/in/mukesh-kumawat-89028325b"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="list">
            <a
              href="https://github.com/Mukesh-Kumawat-0o"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <FaSquareGithub />
            </a>
          </li>
          <li className="list">
            <a
              href="https://wa.me/qr/OIEHTBGVIKWCP1"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <FaSquareWhatsapp />
            </a>
          </li>

          <li className="list">
            <a
              href="https://t.me/+r_xj43LlHEQ3NTA9"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <BsTelegram />
            </a>
          </li>
          <li className="list">
            <a
              href="https://t.me/+SHAxtazvfFVlNzA1"
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

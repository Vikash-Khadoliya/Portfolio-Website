import React from "react";
import "./contsctus.scss";
import { MdContacts } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Social from "../../components/social-media/Social";
import { Bounce } from "react-awesome-reveal";

function ContactUs() {
  return (
    <div className="contact" id="contact">
      <Bounce duration={1000} delay={50}>
        <div className="head">
          <MdContacts className="icon" />
          <h2 className="heading">
            Contact <span className="st2">Me</span>
          </h2>
        </div>
      </Bounce>

      <div className="contact-box">
        <div className="left-part">
          <h2 className="heading">
            Mukesh's <span className="st06">Portfolio</span>
          </h2>
          <p className="st03">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
        </div>
        <div className="middle-part">
          <Social />
        </div>
        <div className="right-part">
          <div className="email">
            <AiOutlineMail className="icon" />
            <h4 className="heading">: mukeshkumawatb5@gmail.com</h4>
          </div>
          <div className="phone">
            <BsTelephone className="icon" />
            <h4 className="heading">: +91 9509236243</h4>
          </div>
          <div className="location">
            <SlLocationPin className="icon" />
            <h4 className="heading">: Jhunjhunu, (Raj.), India</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

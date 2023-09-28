import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import logoImg from "../../Assets/logo3.1.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";

function Navbar() {
  const [navMobile, setNavMobile] = useState(true);

  return (
    <nav className="nav">
      <div className="navbar">
        <div className="logo">
          <div className="icon">
            <img src={logoImg} alt="Owner Logo" />
          </div>
          <div className="name">
            <h1 className="heading">Mukesh</h1>
          </div>
        </div>
        <div className={navMobile ? "list-parent" : "mobile-list-parent"}>
          <ul className={navMobile ? "ul-links" : "mobile-ul-links"}>
            <li className="nav-list">
              <Link
                className="link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
                delay={250}
                onClick={() => setNavMobile(true)}
              >
                Home
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="link"
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                delay={250}
                onClick={() => setNavMobile(true)}
              >
                Project
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="link"
                activeClass="active"
                to="skill"
                spy={true}
                smooth={true}
                offset={-45}
                duration={1200}
                delay={250}
                onClick={() => setNavMobile(true)}
              >
                Skill
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1200}
                delay={250}
                onClick={() => setNavMobile(true)}
              >
                About
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={1200}
                delay={250}
                onClick={() => setNavMobile(true)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => setNavMobile(!navMobile)}>
          {navMobile ? <RxHamburgerMenu /> : <MdCancel />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

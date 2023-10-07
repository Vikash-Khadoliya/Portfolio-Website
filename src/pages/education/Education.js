import React from "react";
import "./education.scss";
import schoolpic from "../../Assets/school.jpg";
import collegepic from "../../Assets/college.jpg";
import { GiSecretBook } from "react-icons/gi";
import { BsFillPencilFill } from "react-icons/bs";

function Education() {
  return (
    <div className="edu-box">
      <div className="education container">
        <div className="head">
          <GiSecretBook className="icon" />
          <h2 className="heading">Education</h2>
          <BsFillPencilFill className="st2" style={{ fontSize: "1.8rem" }} />
        </div>
        <div className="college edu">
          <div className="img-box">
            <img src={collegepic} alt="data not found" />
          </div>
          <div className="text">
            <h3>Bachelor of Computer Application</h3>
            <p className="st5">
              Seth Gyaniram Bansidhar Podar College, Nawalgarh
            </p>
            <h4>
              2021-2024 | <span className="st4">Pursuing </span>
            </h4>
          </div>
        </div>
        <div className="school edu">
          <div className="img-box">
            <img src={schoolpic} alt="something missing" />
          </div>
          <div className="text">
            <h3>Science (Maths)</h3>
            <p className="st5">
              Kshitiz Memorial Public Sr. Sec. School, Udaipurwati
            </p>
            <h4>
              2019-2021 | <span className="st4">Completed</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

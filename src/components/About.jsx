import React from "react";
import aboutcss from "./stylesheet/about.module.css";
import photo from "../images/IMG_20231007_094400_001.jpg";
import { CgProfile } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";

function About() {
  return (
    <div className={aboutcss.aboutmain}>
      <div className={aboutcss.top}>
        <div className={aboutcss.image}>
          <img src={photo} />
        </div>
      </div>
      <div className={aboutcss.bottom}>
        <div className={aboutcss.info}>
          <CgProfile style={{ height: "100%", fontSize: "2rem" }} />{" "}
          <p className={aboutcss.name}>Aman Kumar</p>
        </div>
        <div className={aboutcss.info}>
          <IoCallOutline style={{ height: "100%", fontSize: "2rem" }} />{" "}
          <p className={aboutcss.number}> +91 6203720154 </p>{" "}
        </div>
        <div className={aboutcss.info}>
          <AiOutlineMail style={{ height: "100%", fontSize: "2rem" }} />{" "}
          <p className={aboutcss.email}> amankumar08888@gmail.com</p>
        </div>
        <div className={aboutcss.info}>
          <ImLinkedin style={{ height: "100%", fontSize: "2rem" }} />{" "}
          <a
            className={aboutcss.linkedin}
            href="https://www.linkedin.com/in/aman-kumar-287b70217/"
          >
            Linkedin profile
          </a>
        </div>
        <div className={aboutcss.info}>
          <FaSquareGithub style={{ height: "100%", fontSize: "2rem" }} />
          <a
            className={aboutcss.github}
            href="https://github.com/20P3QA0567AMAN"
          >
            Github
          </a>
        </div>
      
      </div>
    </div>
  );
}

export default About;

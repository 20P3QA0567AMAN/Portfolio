import React from "react";
import home from "./stylesheet/home.module.css";
import { Typewriter } from "react-simple-typewriter";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className={home.homemain}>
      <div className={home.nav}>
          <Link to="/">Home</Link><Link to="/skills">Skills</Link><Link to="/projects">Projects</Link>
      </div>
      <div className={home.box}>
      <div className={home.left}>
        <p className={home.text}>
          {" "}
          Hi, I am Aman and I am a <br />
          <span>
            {/* {" "} */}
            <Typewriter
              words={["MERN Stack Developer", "Problem Solver", "Coder"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className={home.detail}>
          Self-motivated CS undergraduate seeking for an opportunity to work in
          an environment where I can utilize my technical, managerial and
          communication skills for the growth of my career along with the
          company's growth.
        </p>
      </div>
      <div className={home.right}>
        <img
          src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?size=626&ext=jpg&uid=R100454838&ga=GA1.1.980694037.1712240315&semt=ais"
        />
      </div>
      </div>
    </div>
  );
}

export default Home;

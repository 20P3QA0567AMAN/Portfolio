import React from "react";
import project from "./stylesheet/project.module.css";
import Card from "./Card";
import {Link} from 'react-router-dom'

function Projects() {
  const data = [
    {
      cardTitle: "Portfolio",
      projectImg: "./portfolio.png",
      projectdesc:
        "A portfolio developed using React and CSS is a modern and customizable showcase of an individual's  projects, skills, and achievements.",
      link: true,
      projectlink: "https://aman0567.github.io/Portfolio/"
    },
    {
      cardTitle: "TextUtils",
      projectImg: "./Screenshot 2024-04-08 154237.png",
      projectdesc:
        "The website is a simple yet powerful tool for converting text between uppercase and lowercase formats with ease.",
      link: true,
      projectlink:"https://aman0567.github.io/TextUtils/"
    },
    {
      cardTitle: "NewsAPP",
      projectImg: "./newsapp.png",
      projectdesc:
        "The website is a comprehensive and dynamic platform that aggregates news content from various sources worldwide. ",
      link: false,
      projectlink: ""
    },
    
   
  ];
  return (
    <div className={project.main}>
      <div className={project.nav}>
      <Link to="/">Home</Link><Link to="/skills">Skills</Link><Link to="/projects">Projects</Link>
      </div>
      <div className={project.box}>
        {data.map((items, index) => (
          <Card key={index} data={items} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

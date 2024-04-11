import React from 'react'
import skills from './stylesheet/skills.module.css'
import {Link} from 'react-router-dom'
function Skills() {
  return (
    <div className={skills.main}>
      <div className={skills.nav}>
      <Link to="/">Home</Link><Link to="/skills">Skills</Link><Link to="/projects">Projects</Link>
      </div>
     <div className={skills.box}>
        <div className={skills.left}>
          <div className={skills.programminglanguage}> 
            <h1>Programming Languge</h1>
            <p>Python</p>
            <div className={skills.python}>
              <div className={skills.know}></div>
            </div>
            <p>Java</p>
            <div className={skills.java}>
              <div className={skills.know}></div>
            </div>
            <p>Java Script</p>
            <div className={skills.javascript}>
              <div className={skills.know}></div>
            </div>
          </div>
          <div className={skills.frameworks}>
            <h1>Frameworks</h1>
            <p>Express js</p>
            <div className={skills.express}>
              <div className={skills.know}></div>
            </div>
            <p>Tailwind CSS</p>
            <div className={skills.tailwind}>
              <div className={skills.know}></div>
            </div>
          </div>
        </div>
        <div className={skills.right}>
          <div className={skills.libraries}>
            <h1>Libraries</h1>
            <p>React </p>
            <div className={skills.react}>
              <div className={skills.know}></div>
            </div>
            <p>Node </p>
            <div className={skills.node}>
              <div className={skills.know}></div>
            </div>
          </div>
          <div className={skills.database}>
            <h1>Database</h1>
            <p>SQL </p>
            <div className={skills.sql}>
              <div className={skills.know}></div>
            </div>
            <p>Mongo DB</p>
            <div className={skills.mongo}>
              <div className={skills.know}></div>
            </div>
            <p>PostgresSQL </p>
            <div className={skills.postgres}>
              <div className={skills.know}></div>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Skills

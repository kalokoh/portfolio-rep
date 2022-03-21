import React from 'react'
import classes from './Skills.module.css';

const Skills = () => {
  return (
    <React.Fragment>
         <div className={classes.details}>
         <div className={classes.fcontainer}>
            <div className={classes.first}>
            <p>Skills</p>
          <ul>
            <li>Hyper Text Markup Language (HTML)</li>
            <li>Cascading Style Sheet (CSS)</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Microsoft Word</li>
            <li>Microsoft PowerPoint</li>
          </ul>
          </div>
          </div>
          </div>
    </React.Fragment>
  )
}

export default Skills
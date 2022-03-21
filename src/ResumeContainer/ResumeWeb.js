import React, { useState } from "react";
import classes from "./ResumeWeb.module.css";
import { MdOutlineCastForEducation, MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { TiPointOfInterestOutline } from "react-icons/ti";
import Education from "./Education";
import WorkExperience from "./WorkExerience";
import Skills from "./Skills";
import Interest from "./Interest";

const ResumeWeb = () => {
  const [education, setEducation] = useState(true);
  const [work, setWork] = useState(false);
  const [skills, setSkills] = useState(false);
  const [interest, setInterest] = useState(false);

  const educationDisplayHandler = () => {
    setEducation(true);
    setWork(false);
    setSkills(false);
    setInterest(false);
  };
  const workDisplayHandler = () => {
    setEducation(false);
    setWork(true);
    setSkills(false);
    setInterest(false);
  };
  const skillsDisplayHandler = () => {
    setEducation(false);
    setWork(false);
    setSkills(true);
    setInterest(false);
  };
  const interestsDisplayHandler = () => {
    setEducation(false);
    setWork(false);
    setSkills(false);
    setInterest(true);
  };
  return (
    <div className={classes["resume-container"]}>
      <h1>Resume</h1>
      <div className={classes.resume}>
        <div className={classes.icons}>
          <MdOutlineCastForEducation
            className={classes.icon}
            onClick={educationDisplayHandler}
          />
          <MdWork
            className={classes.icon}
            onClick={workDisplayHandler}
          />
          <GiSkills
            className={classes.icon}
            onClick={skillsDisplayHandler}
          />
          <TiPointOfInterestOutline
            className={classes.icon}
            onClick={interestsDisplayHandler}
          />
        </div>
        <div className={classes.list}>
          <ul>
            <li onClick={educationDisplayHandler}>
              <a href={educationDisplayHandler}>Education</a>
            </li>
            <li onClick={workDisplayHandler}>W/Experience</li>
            <li onClick={skillsDisplayHandler}>Skills</li>
            <li onClick={interestsDisplayHandler}>Interest</li>
          </ul>
        </div>
        {education && <Education />}
        {work && <WorkExperience />}
        {interest && <Interest />}
        {skills && <Skills />}
      </div>
    </div>
  );
};

export default ResumeWeb;

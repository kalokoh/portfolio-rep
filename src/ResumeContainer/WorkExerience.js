import React from "react";
import classes from "./WorkExperience.module.css";

const WorkExperience = () => {
  return (
    <React.Fragment>
      <div className={classes.details}>
        <div className={classes.fcontainer}>
          <div className={classes.first}>
            <h3> AL-Furqan Secondary School, Teacher</h3>
            <p>2021 - present</p>
          </div>
          <p className={classes.bece}>
            Teaches Mathematics, Chemistry, Computer Science
          </p>
        </div>

        <div className={classes.fcontainer}>
          <div className={classes.first}>
            <h3>Tusakay Pri and high school, Teacher</h3>
            <p>2021 - present</p>
          </div>
          <p className={classes.bece}>
            Teaches Mathematics, Science, Computer Science
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkExperience;

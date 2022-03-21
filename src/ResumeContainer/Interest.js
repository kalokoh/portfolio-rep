import React from "react";
import classes from "./Interest.module.css";

const Interest = () => {
  return (
    <React.Fragment>
        <div className={classes.details}>
         <div className={classes.fcontainer}>
            <div className={classes.first}>
            <p>Interest and Hobbies</p>
          <ul>
            <li>Programming</li>
            <li>Football</li>
            <li>Wrestling</li>
            <li>Reading</li>
            <li>Teaching</li>
            <li>Problem solving</li>
          </ul>
          </div>
          </div>
          </div>
    </React.Fragment>
  );
};

export default Interest;

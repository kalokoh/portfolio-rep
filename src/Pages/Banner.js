import React, {useContext} from "react";
import classes from "./Banner.module.css";
import Typical from "react-typical";
import photo from "../Assest/alie.jpg";
import contextProvider from "../ContextContainer/Context";

const Banner = () => {
  const context = useContext(contextProvider);
  
  return (
    <React.Fragment>
      <div>
      <div className={classes["banner-container"]}>
        <div className={classes["banner"]}>
          <div className={classes.profile}>
            <p className={classes.name}>Hello, My name is Alie Kalokoh</p>
            <p className={classes.typical}>
              <Typical
                loop={Infinity}
                steps={[
                  "Front-end Developer",
                  2000,
                  "HTML",
                  2000,
                  "CSS",
                  2000,
                  "Javascript",
                  2000,
                  "React",
                ]}
              />
            </p>
            <p className={classes.job}>
              I use the latest web technologies to design websites
            </p>
          </div>
          <div className={classes.photo}>
            <img src={photo} alt="profile" />
          </div>
          <div className={classes.typical}></div>
        </div>
        <div className={classes.buttons}>
          <button className={classes.btn} onClick={context.scrollToContact} >Contact Me</button>
          <button className={classes.btn} onClick={context.scrollToResume} >Resume</button>
        </div>
        
      </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;

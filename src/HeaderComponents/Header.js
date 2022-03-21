import React from "react";
import classes from "./Header.module.css";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.name}>
          <p>Alie Kalokoh</p>
        </div>
        <div className={classes.menu}>
          <Menu />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

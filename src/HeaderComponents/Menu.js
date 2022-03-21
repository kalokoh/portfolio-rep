import React, {useContext} from "react";
import classes from "./Menu.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import contextProvider from '../ContextContainer/Context';
import { AiOutlineDoubleLeft } from "react-icons/ai";


const Menu = (props) => {
const context = useContext(contextProvider)
  return (
    <React.Fragment>
      <div>
        <ul className={classes.menu}>
          <li onClick={context.scrollToAbout}>About Me</li>
          <li onClick={context.scrollToContact}>Contact</li>
          <li onClick={context.scrollToResume}>Resume</li>
        </ul>
      </div>
      <div className={classes["bar-container"]}>
        {!context.showSideMenu && <AiOutlineMenu className={classes.bar} onClick={context.showSideMenuHamdler} />}
        {context.showSideMenu &&<AiOutlineDoubleLeft className={classes.bar} onClick={context.showSideMenuHamdler} />}
      </div>
      
      
    </React.Fragment>
  );
};

export default Menu;

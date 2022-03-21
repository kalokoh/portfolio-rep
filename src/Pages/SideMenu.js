import React, {useContext} from 'react';
import classes from './SideMenu.module.css'
import contextProvider from '../ContextContainer/Context'

const SideMenu = () => {
    const context = useContext(contextProvider)
  return (
    <div onClick={context.showSideMenuHamdler}>
    <ul className={classes.menu2}>
      <li onClick={context.scrollToAbout}>About Me</li>
      <li onClick={context.scrollToContact}>Contact</li>
      <li onClick={context.scrollToResume}>Resume</li>
    </ul>
  </div>
  );
};

export default SideMenu;

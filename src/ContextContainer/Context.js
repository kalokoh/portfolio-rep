import React, { useRef, useState } from "react";

const contextProvider = React.createContext({
  sayHello: () => {},
  scrollToAbout: () => {},
  scrollToContact: () => {},
  scrollToResume: () => {},
  about: "",
  contact: "",
  resume: "",
  showSideMenu: false,
  showSideMenuHamdler: () => {},
});
export const Context = ({ children }) => {
  const about = useRef(null);
  const contact = useRef(null);
  const resume = useRef(null);

  const [showSideMenu, setShowSideMenu] = useState(false);

  const showSideMenuHandler = () =>{
    setShowSideMenu(!showSideMenu)
  }


  const scrollToAbout = () => {
    return window.scrollTo({
      top: about.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    return window.scrollTo({
      top: contact.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToResume = () => {
    return window.scrollTo({
      top: resume.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <contextProvider.Provider
      value={{
        showSideMenuHamdler: showSideMenuHandler,
        showSideMenu: showSideMenu,
        scrollToAbout: scrollToAbout,
        scrollToContact: scrollToContact,
        scrollToResume: scrollToResume,
        about: about,
        contact: contact,
        resume: resume,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default contextProvider;

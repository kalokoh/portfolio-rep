import React, { useContext } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import contextProvider from "./ContextContainer/Context";
import Footer from "./FooterContainer/Footer";
import NavBar from "./Pages/NavBar";
import { Routes, Route } from "react-router-dom";
import Banner from "./Pages/Banner";
import { PDFDownloadLink, } from "@react-pdf/renderer";
import classes from "./App.module.css";
import ResumeWeb from "./ResumeContainer/ResumeWeb";

function App() {
  const context = useContext(contextProvider);

  return (
    <React.Fragment>
      <Routes>
        <Route />
      </Routes>
      <NavBar />
      <Banner />

      <div ref={context.about}>
        <About />
      </div>
      <div ref={context.contact}>
        <Contact />
      </div>
      <div ref={context.resume} className={classes["resume-container"]}>
        <div>
         <ResumeWeb />
        </div>
        <PDFDownloadLink document={<Resume />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <button className={classes.btn}>Download Resume</button>
            )
          }
        </PDFDownloadLink>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;

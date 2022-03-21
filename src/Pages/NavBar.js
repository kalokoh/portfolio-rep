import React, { useContext } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import contextProvider from "../ContextContainer/Context";
import { Link } from "react-router-dom";

const NavBar = () => {
  const context = useContext(contextProvider);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="header"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Alie Kalokoh
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span>
              <AiOutlineMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0" id="man">
              <li
                onClick={context.scrollToAbout}
                className="nav-item"
                id="navItem"
              >
                <Link className="nav-link " aria-current="page" to="">
                  About Me
                </Link>
              </li>
              <li
                onClick={context.scrollToContact}
                className="nav-item"
                id="navItem"
              >
                <Link className="nav-link" aria-current="page" to="">
                  Contact Me
                </Link>
              </li>
              <li
                onClick={context.scrollToResume}
                className="nav-item"
                id="navItem"
              >
                <Link className="nav-link" aria-current="page" to="">
                  Resume
                </Link>
              </li>

              <li className="nav-item" id="navItem">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link "
                  href="https://tusakay-school.web.app/"
                >
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

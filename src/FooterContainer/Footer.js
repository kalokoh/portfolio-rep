import React from "react";
import classes from "./Footer.module.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <React.Fragment>
      <div >
      <div className={classes["footer-container"]}>
        <p className={classes.txt}>Contact me on social media</p>

        <div className={classes.footer}>
          <div className={classes.social}>
            <a href="https://wa.me/qr/EFN7P5TUVJC2D1">
              <AiOutlineWhatsApp />
            </a>
            <p>Whatsapp</p>
          </div>
          <div className={classes.social}>
            <a href="https://www.facebook.com/Computer-Studies-111905368077223">
              <AiFillFacebook />
            </a>
            <p>FaceBook</p>
          </div>
          <div className={classes.social}>
            <a href="www.google.com">
              <AiOutlineInstagram />
            </a>
            <p>Instagram</p>
          </div>
          <div className={classes.social}>
            <a href="www.google.com">
              <AiFillTwitterCircle />
            </a>
            <p>Twitter</p>
          </div>
        </div>
        <p className={classes.copyright}> copyright&copy;AlieKalokoh2022</p>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

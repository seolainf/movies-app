import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <span>Exxmon </span>© 2022 - All rights reserved
      </div>
      <div className="footer__social">
        <div className="footer__item">
          <BsFacebook className="icon" />
        </div>
        <div className="footer__item">
          <BsYoutube className="icon" />
        </div>
        <div className="footer__item">
          <BsInstagram className="icon" />
        </div>
        <div className="footer__item">
          <BsTwitter className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

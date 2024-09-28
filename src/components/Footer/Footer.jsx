import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span> © 2022 | All rights reserved | Design By
        <strong>Abdullah Chaudhary</strong> With ❤️</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/abdullah_chaudhary_____/" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/Abdullah.Chaudhary979/" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Abdullah-Chaudhary-MERN" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"3rem"} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;

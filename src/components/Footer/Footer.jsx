import React from 'react';
import "./Footer.css";
import git from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer_wrapper">
        <div className="line_foot"></div>
        <div className="icons">
            <img src={git} alt="git" />
            <img src={insta} alt="insta" />
            <img src={linkedin} alt="linkedin" />
        </div>
        <div className="foot_logo">
        <img  src={logo} alt="logo" />
        </div>
        <div className='blur footer_blur1'></div>
        <div className='blur footer_blur2'></div>
    </div>
  )
}

export default Footer;
import React from 'react';
import "./Header.css";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { GiCrossMark } from 'react-icons/gi';

const Header = () => {
  const [togglemenu, setTogglemenu] = useState('false');
  return (
    <div className="header">

      <img className="logoimg" src={Logo} alt='logo' />
      <ul className="head_title">
        <li> <a href='#Home'>Home</a></li>
        <li> <a href='#Programs'>Programs</a></li>
        <li> <a href='#why us'>Why us</a></li>
        <li> <a href='#plans'>Plans</a></li>
        <li> <a href='#testimonials'>Testimonials</a></li>
      </ul>
      <div className="hero_smallscreen">
        <GiHamburgerMenu color='white' fontSize={20} onClick={() => setTogglemenu(true)} />
        {togglemenu && (
          <div className="hero_smallscreen_app">
            <GiCrossMark fontSize={20} className='icon' onClick={() => setTogglemenu(false)} />
            <ul className="head_title_smallscreen" onClick={() => setTogglemenu(false)}>
              <li> <a href='#Home'>Home</a></li>
              <li> <a href='#Programs'>Programs</a></li>
              <li> <a href='#why us'>Why us</a></li>
              <li> <a href='#plans'>Plans</a></li>
              <li> <a href='#testimonials'>Testimonials</a></li>
            </ul>

          </div>
        )}
      </div>
    </div>
  )
}

export default Header;
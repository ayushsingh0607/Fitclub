import React from 'react';
import Header from '../Header/Header';
import "./Hero.css";
import hero_img_back from "../../assets/hero_image_back.png";
import hero_img from "../../assets/hero_image.png";
import heart from "../../assets/heart.png";
import { motion } from "framer-motion";



const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<= 768 ? true : false;
  return (
    <div className="heroWrapper" >
      <div className=" blur hero_blur"></div>
      <div className="left">
        <Header />
        <div className="hero_title" id='Home'>
          <motion.div className="animation"
            initial={{ left: mobile ? "178px" : '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}></motion.div>

          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="hero_body">
          <span className="stroke" style={{ fontSize: "5rem", textOverflow: "inherit" }}>SHAPE </span>
          <span>YOUR <br /> IDEAL BODY</span>
        </div>
        <div className="sec_outline">In here  we  will  help  you  to  shape  and  build  your  ideal  body  and  live  up  your  life  to  fullest.</div>
        <div className="hero_fig">
          <div className="figures_cal">
            <div className="figures">
              <div className="fig">
                <span>+140</span>
                <span >EXPERT COACHES</span>
              </div>
              <div className='fig'>
                <span >+978</span>
                <span >MEMBERS JOINED</span>
              </div>
              <div className='fig'>
                <span>+50</span>
                <span>FITNESS PROGRAMS</span>
              </div>
            </div>
            <div className="hero_button" style={{ display: "flex", gap: "15px" }}>
              <button className="custom_button">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="Calories_card">
            <div className="chart">
              <div className="line" style={{ height: "3.5rem" }}></div>
              <div className="line" style={{ height: "4.5rem" }}></div>
              <div className="line" style={{ height: "2.5rem" }}></div>
              <div className="line" style={{ height: "1.5rem" }}></div>
              <div className="line" style={{ height: "4.5rem" }}></div>
            </div>
            <div className="info">
              <span style={{ color: "var(--gray)", fontSize: "16px Inter-sans" }}>Calories burned</span>
              <span style={{ color: "white", fontSize: "1.5rem" }}>220 kcal</span>
            </div>
          </div>

        </div>
      </div>
      <div className="right">
        <button className='button'>JOIN NOW</button>
        <motion.div className="heart_rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition} >
          <img src={heart} alt="heart" />
          <span style={{ color: "var(--gray)" }}>Heart Rate</span>
          <span style={{ color: "white", fontSize: "1.5rem" }}>116 bpm</span>
        </motion.div>
        <div className="images">
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            className="img_back" src={hero_img_back} alt="hero" />
          <img className="img_hero" src={hero_img} alt="" />
        </div>
      </div>
      

    </div>
  )
}

export default Hero;
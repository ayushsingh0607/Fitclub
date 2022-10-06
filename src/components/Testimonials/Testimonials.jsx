import React from 'react';
import "./Testimonials.css";
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';
import larrow from "../../assets/leftArrow.png";
import rarrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion"

const Testimonials = () => {
    const transition = { type: "spring", duration: 3 };
    const [select, setSelect] = useState(0);
    const tlength = testimonialsData.length;

    return (
        <div className="Test_wrapper">
            <div className="test_left">
                <div className="test_title">
                    <span style={{ color: "var(--orange)", fontWeight: "bold" }}>Testimonials</span>
                </div>
                <div className="test_head">
                    <span className="stroke">WHAT THEY</span>
                    <span>SAY ABOUT US</span>
                </div>
                <motion.span
                    key={select}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    style={{ color: "white", wordSpacing: "1rem", lineHeight: "2em" }}>
                    {testimonialsData[select].review}
                </motion.span>
                <span 
                style={{ color: "white" }}>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[select].name}
                    </span>{" "}
                    - {testimonialsData[select].status}
                </span>
            </div>
            <div className="test_right">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}

                    className="border"></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                    className='filled_border'></motion.div>
                <div className="test_image">
                    <motion.img
                        key={select}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={transition}
                        src={testimonialsData[select].image} alt="image" />
                </div>
                <div className="test_arrow">
                    <img className="left_arrow"
                        onClick={() => {
                            select === 0 ? setSelect(tlength - 1) : setSelect((prev) => prev - 1);
                        }}
                        src={larrow} alt="left" />
                    <img className="right_arrow"
                        onClick={() => {
                            select === tlength - 1 ? setSelect(0) : setSelect((prev) => prev + 1);
                        }}
                        src={rarrow} alt="right" />
                </div>
            </div>

        </div>
    )
}

export default Testimonials;
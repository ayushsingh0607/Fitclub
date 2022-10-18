import React from 'react';
import "./Programs.css";

const Programs = () => {
    return (
        <div className="programs_wrapper" id='Programs'>
            <div className="programs_title">
                <span className='stroke'>EXPLORE OUR</span>
                <span className="second" style={{ color: "white" }}>PROGRAMS</span>
                <span className='stroke'>TO SHAPE YOU</span>
            </div>
            <div className="programs_body">
                <div className="card">
                    <img style={{ width: "1.5rem" }} src="https://img.icons8.com/metro/5000/ffffff/barbell.png" alt="gym" />
                    <span className="card_head">Strength Training</span>
                    <span className='card_body'>In this program, you are trained to improve your strength through many exercises.</span>
                    <div className="butons">
                        <button className='but'>Join Now</button>
                        <img src="https://img.icons8.com/ios-filled/29/ffffff/right--v1.png" alt="" />
                    </div>
                </div>
                <div className="card">
                    <img style={{ width: "2rem" }} src="https://img.icons8.com/material-rounded/50000/ffffff/exercise.png" alt="cardio" />
                    <span className="card_head">Cardio Training</span>
                    <span className='card_body'>In this program, you are trained to improve your strength through many exercises.</span>
                    <div className="butons">
                        <button className='but'>Join Now</button>
                        <img src="https://img.icons8.com/ios-filled/29/ffffff/right--v1.png" alt="" />
                    </div>
                </div>
                <div className="card">
                    <img style={{ width: "2rem" }} src="https://img.icons8.com/ios-filled/50/ffffff/gas.png" alt="cardio" />
                    <span className="card_head">Fat Burning</span>
                    <span className='card_body'>In this program, you are trained to improve your strength through many exercises.</span>
                    <div className="butons">
                        <button className='but'>Join Now</button>
                        <img src="https://img.icons8.com/ios-filled/29/ffffff/right--v1.png" alt="" />
                    </div>
                </div>
                <div className="card">
                <img style={{ width: "2rem" }} src="https://img.icons8.com/ios/50/ffffff/heart-with-pulse.png" alt="cardio" />
                    <span className="card_head">Health Fitness</span>
                    <span className='card_body'>In this program, you are trained to improve your strength through many exercises.</span>
                    <div className="butons">
                        <button className='but'>Join Now</button>
                        <img src="https://img.icons8.com/ios-filled/29/ffffff/right--v1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;
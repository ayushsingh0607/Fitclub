import React from 'react';
import "./Plans.css";
import white from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plan_wrapper" id='plans'>
      <div className='blur plans_blur1'></div>
      <div className='blur plans_blur2'></div>

      
      <div className="plan_title">
        <span className='stroke'>READY TO START</span>
        <span style={{ color: "white" }}>YOUR JOURNEY</span>
        <span className='stroke'>NOW WITH US</span>
      </div>
      <div className="plans">
        <div className="plan_card">
          <div className="plan_icon">
            <img src="https://img.icons8.com/material-outlined/40/f48915/heart-cross.png" alt="heart" />
          </div>
          <span style={{ color: 'white', fontWeight: "bold", fontSize: "1.5rem" }}>BASIC PLAN</span>
          <span style={{ color: "white", fontWeight: "bold", fontSize: "40px", margin: "7px 0px 7px 0px" }}>$ 25</span>
          <div className="plan_points">
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>2 hours of exercises</span>
            </div>
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>Free consultation to <br />coaches</span>
            </div>
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>Access to The Community</span>
            </div>
            <div className="benefits">
              <span style={{ color: "white", fontSize: "small" }}>See more benefits</span>
              <img src="https://img.icons8.com/ios-filled/20/ffffff/right--v1.png" alt="" />
            </div>
            <button className="join_but" >Join now</button>
          </div>
        </div>
        <div className="plan_card">
          <div className="plan_icon">
            <img src="https://img.icons8.com/ios-filled/40/f48915/crown.png" alt="heart" />
          </div>
          <span style={{ color: 'white', fontWeight: "bold", fontSize: "1.5rem" }}>PREMIUM PLAN</span>
          <span style={{ color: "white", fontWeight: "bold", fontSize: "40px", margin: "7px 0px 7px 0px" }}>$ 30</span>
          <div className="plan_points">
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>5 hours of exercises</span>
            </div>
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>Free consultation to <br />coaches</span>
            </div>
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>Access to minibar</span>
            </div>
            <div className="benefits">
              <span style={{ color: "white", fontSize: "small" }}>See more benefits</span>
              <img src="https://img.icons8.com/ios-filled/20/ffffff/right--v1.png" alt="" />
            </div>
            <button className="join_but" >Join now</button>
          </div>
        </div>
        <div className="plan_card">
          <div className="plan_icon">
            <img src="https://img.icons8.com/metro/35/f48915/barbell.png" alt="heart" />
          </div>
          <span style={{ color: 'white', fontWeight: "bold", fontSize: "1.5rem" }}>PRO PLAN</span>
          <span style={{ color: "white", fontWeight: "bold", fontSize: "40px", margin: "7px 0px 7px 0px" }}>$ 45</span>
          <div className="plan_points">
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>8 hours of exercises</span>
            </div>
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>Consultation of Private <br />coaches</span>
            </div>
            <div className="point">
              <img style={{ width: '18px', height: "18px" }} src={white} alt="tick" />
              <span style={{ color: "white" }}>Free Fitness Merchandises</span>
            </div>
            <div className="benefits">
              <span style={{ color: "white", fontSize: "small" }}>See more benefits</span>
              <img src="https://img.icons8.com/ios-filled/20/ffffff/right--v1.png" alt="" />
            </div>
            <button className="join_but">Join now</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Plans;
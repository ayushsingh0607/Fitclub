import React from 'react';
import "./Reasons.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

const Reasons = () => {
    return (
        <div className="body_wrapper">
            <div className="left_img">
                <div className="img_container">
                    <img className="img_1" src={img1} alt="img1" />
                    <div className="img_other">
                    <img className="img_2" src={img2} alt="img2" />
                    <div className="img_oth">
                    <img className="img_3" src={img3} alt="img3" />
                    <img className="img_4" src={img4} alt="img4" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="right_text">
                <div className="head1">
                    <span style={{color:"var(--orange)", fontWeight:"bold"}}>Some Reasons</span>  
                </div>
                <div className="head2">
                    <span className='stroke'>WHY</span>
                    <span style={{color:"white"}}> Choose Us ?</span>
                </div>
                <div className='para'>
                    <img src={tick} alt="tick" />
                    <span>OVER 140+ EXPERT COACHES</span>
                </div>
                <div className="para">
                    <img src={tick} alt="tick" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div className="para">
                    <img src={tick} alt="tick" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div className="para">
                    <img src={tick} alt="tick" />
                    <span>RELIABLE PARTNERS</span>
                </div>
                <div className='part_img'>
                    <div className="text">
                    <span style={{color:"var(--gray)", fontStyle:"italic"}}>OUR PARTNERS</span>
                    </div>
                    <div className="img_part">
                    <img  src={nb} alt="nb" />
                    <img src={adidas} alt="adidas" />
                    <img src={nike} alt="nike" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Reasons;
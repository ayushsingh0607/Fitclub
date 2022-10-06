import React from 'react';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./Email.css";

const Email = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_de8ahz4', 'template_p4xf1cb', form.current, 'XuuqRCTrlefmvazYZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="Email_wrapper">
            <div className="email_left">
                <hr />
                <div className="email_head">
                    <span className='stroke'>READY TO</span>
                    <span style={{color:"white", fontSize:"3rem", fontWeight:"bold"}}> LEVEL UP <br/> YOUR BODY</span>
                    <span className='stroke'> WITH US ?</span>
                </div>
            </div>
            <div className="email_right">
                <form ref={form} className='email' onSubmit={sendEmail}>
                    <input type="text" name='user_name' placeholder='Enter Your Email Address here' />
                    <button className="join_btn">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Email;
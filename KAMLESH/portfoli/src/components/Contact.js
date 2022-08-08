import React from 'react'
import "./contact.css";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import Address from "../assets/address.png";
import  WhatsApp  from '../assets/whatsapp.png';
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fwrltbm",
        "template_snyhcso",
        formRef.current,
        "btMfYDqAKhpPatVxf"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // setDone(true)
          alert('suceess')
        },
        (error) => {
          // console.log(error.text);
          alert("error");
        }
      );
  };



  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Hire Me!</h1>
          
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +917903716113
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
             Kamleshkumar91356@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={WhatsApp} alt="" />
              +917903716113
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="Kamlesh Kumar" />
              Gopalganj,Bihar
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
             <b>Always available for
            freelancing  Please Contact Me.</b> 
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" required />
            <input  type="text" placeholder="Subject" name="user_subject"  required/>
            <input  type="text" placeholder="Email" name="user_email" required />
            <textarea rows="5" placeholder="Message" name="message" required />
            <button>Send</button>
            
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
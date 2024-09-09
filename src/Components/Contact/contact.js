import "./contact.css"
import { useRef, useState } from "react"
import instalogo from "../../assets/instagram.png"
import linkedinlogo from "../../assets/linkedin.png"
import twitetrlogo from "../../assets/twitter.png"
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import emailjs from '@emailjs/browser';



export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false)
  const {width,height} = useWindowSize()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a3itycn', 'template_xqdgla6', form.current, 'BNhQsrh8j37XyT853')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert("Email sent!")
      }, (error) => {
          console.log(error.text);
      });
  };

  const initiateConfetti=()=>{
    if(!submitted){
      setSubmitted(true)
      setTimeout(()=>{setSubmitted(false)}, 5000)
    }
  }
  return (
    <section id="contactpage">
        <div id="contactsec">
          <h1 className="contacttitle">Contact</h1>
          <span className="contactdesc">Kindly fill out the form below to discuss the work oppurtunity!</span>
            <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text"  className="name" placeholder="Your name" name="your_name"/>
                <input type="email" className="email" placeholder="Your email" name="your_email"/><small className="inputfielddesc">&#9872; Kindly enter a valid email so that i can respond accordinlgy!</small>
                <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea><small className="inputfielddesc">&#9872; Kindly enter the message!</small>    
                <button type="submit" className="submitbtn" onSubmit={()=>initiateConfetti()} value="send">Submit</button>
                {
                  submitted && <Confetti width={width} height={height}/>
                }
            </form>

            <div className="links">
                  <a target="_blank" rel="noreferer"  href="https://www.linkedin.com/in/karthik-j-68a915195/">
                    <img src={linkedinlogo} alt="LinkedIN" className="link" />
                  </a>

                  <a target="_blank" rel="noreferer"  href="https://www.instagram.com/Karthik.150502/">
                    <img src={instalogo} alt="Instagram" className="link" />
                  </a>
                  <a target="_blank" rel="noreferer" href="https://twitter.com/Karthik72050421">
                    <img src={twitetrlogo} alt="Twitter" className="link" />
                  </a>
            </div>
        </div>
    </section>
    )
}

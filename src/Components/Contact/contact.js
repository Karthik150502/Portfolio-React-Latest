import "./contact.css"
import { useRef, useState } from "react"
import instalogo from "../../assets/instagram.png"
import linkedinlogo from "../../assets/linkedin.png"
import twitetrlogo from "../../assets/twitter.png"
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import emailjs from '@emailjs/browser';
import resume from "./../../assets/files/resume_karthikrdy150502.pdf";
import { Download } from "lucide-react"
import { z } from "zod";



const contactForm = z.object({
  name: z.string().min(1, "Kindly enter the name."),
  email: z.string({ required_error: "Kinldy enter your email." }).email("Kindly enter a valid email, so that i can reply you."),
  message: z.string().min(1, "Kindly enter the message."),
})

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false)
  const [validationError, setValidationErrors] = useState({})
  const { width, height } = useWindowSize()
  const sendEmail = (e) => {
    e.preventDefault();
    setValidationErrors({});

    const name = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value
    let res = contactForm.safeParse({
      name,
      email,
      message
    })
    if (!res.success) {
      let errors = res.error.flatten().fieldErrors
      setValidationErrors((prev) => {
        return {
          name: errors?.name ? errors?.name[0] : "",
          email: errors?.email ? errors?.email[0] : "",
          message: errors?.message ? errors?.message[0] : "",
        }
      })
      return
    }

    emailjs.sendForm('service_a3itycn', 'template_xqdgla6', form.current, 'BNhQsrh8j37XyT853')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        alert("Email sent!")
      }, (error) => {
        console.log(error.text);
      });

  };
  return (
    <section id="contactpage">
      <div id="contactsec">
        <h1 className="contacttitle">Contact</h1>
        <span className="contactdesc">Kindly fill out the form below to discuss the work oppurtunity!</span>
        <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name="your_name" />
          {
            validationError?.name && <small className="inputfielddesc">&#9872; {validationError?.name}</small>
          }
          <input type="text" className="email" placeholder="Your email" name="your_email" />
          {
            validationError?.email && <small className="inputfielddesc">&#9872; {validationError?.email}</small>
          }
          <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>
          {
            validationError?.message && <small className="inputfielddesc">&#9872; {validationError?.message}</small>
          }
          <button type="submit" className="submitbtn" onSubmit={() => initiateConfetti()} value="send">Submit</button>
          {
            submitted && <Confetti width={width} height={height} />
          }
        </form>



        <div className="links">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karthik-j-68a915195/">
            <img src={linkedinlogo} alt="LinkedIN" className="link" />
          </a>

          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/Karthik.150502/">
            <img src={instalogo} alt="Instagram" className="link" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/Karthik72050421">
            <img src={twitetrlogo} alt="Twitter" className="link" />
          </a>
        </div>
        <span className='download-link'>
          <Download strokeWidth={2} size={15} />
          <a href={resume} download className='resumelink'>Download my Resume</a>
        </span>
      </div>
    </section>
  )
}

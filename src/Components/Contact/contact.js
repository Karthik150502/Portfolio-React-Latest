import "./contact.css"
import { useRef, useState } from "react"
import instalogo from "../../assets/instagram.png"
import linkedinlogo from "../../assets/linkedin.png"
import twitetrlogo from "../../assets/twitter.png"
import React from 'react'
import emailjs from '@emailjs/browser';
import Github from "./../../assets/github.png"
import { z } from "zod";



const contactForm = z.object({
  name: z.string().min(1, "Kindly enter the name."),
  email: z.string({ required_error: "Kinldy enter your email." }).email("Kindly enter a valid email, so that i can reply you."),
  message: z.string().min(1, "Kindly enter the message."),
})

export default function Contact() {
  const form = useRef();
  const [validationError, setValidationErrors] = useState({})
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

    emailjs.sendForm('service_a3itycn', 'template_xqdgla6', form.current, '8NA342aS7wKjjdhLQ')
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
        <h2 className='text-5xl md:text-6xl font-bold text-center tracking-tighter'>Contact</h2>
        <p className='text-black/70 text-center text-lg md:text-xl max-w-sm mx-auto tracking-tight mt-3 font-bold'>Kindly fill out the form below to discuss the work oppurtunity!</p>
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
          <button type="submit" className="bg-black py-2 px-4 font-bold text-white rounded-full hover:bg-black/80 transition-colors duration-300 my-10" value="send">Submit</button>
        </form>



        <div className="links">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karthik-j-68a915195/">
            <img src={linkedinlogo} alt="LinkedIN" className="link" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/Karthik150502">
            <img src={Github} alt="Github" className="link" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/Karthik72050421">
            <img src={twitetrlogo} alt="Twitter" className="link" />
          </a>
        </div>

      </div>
    </section>
  )
}

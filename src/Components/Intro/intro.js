import React from 'react'
import "./intro.css"
import mypic from "../../assets/myimage.png"
import { Link } from 'react-scroll'

export default function Intro() {
  return (
    <section id="intro">
      <div className="introcont">
        <span className="hello">Hello,</span>
        <span className="introtxt">I'm <span className='introname'>Karthik J</span><br />Full Stack Developer</span>
      </div>
      <img src={mypic} alt="Profile" className="bg" />
    </section>
  )
}

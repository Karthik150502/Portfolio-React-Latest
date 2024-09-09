import React from 'react'
import "./intro.css"
import mypic from "../../assets/myimage.png"
import { Link } from 'react-scroll'
import { Download } from 'lucide-react'
export default function Intro() {
  return (
    <section id="intro">
      <div className="introcont">
        <span className="hello">Hello,</span>

        <span className="introtxt">I'm <span className='introname'>Karthik J,</span><br />A Full Stack Software Developer, and this is my portfolio.</span>
        <span className='download-link'>
          <Download strokeWidth={2} size={15}/>
          <a href="//drive.google.com/uc?export=download&id=1sJtjbVL_UIZ6fbeWKtJ2ELZy8ng_H8ou" download className='resumelink'>Download Resume</a>
        </span>
      </div>
      <img src={mypic} alt="Profile" className="bg" />
    </section>
  )
}

import React from 'react'
import { Link } from 'react-scroll'
import forcececloud from "./4celoud.svg"
import salesforce from "./Salesforce Logo.jpeg"
import "./styles.css"



export default function Experience() {
    return (
        <section id="experience">

            <div className="container">
                <h2 className='text-5xl md:text-6xl font-bold text-center tracking-tighter '>Experience</h2>
                <div className='skillbars2'>
                    <div className="skillbars">
                        <div className="conts2">
                            <img src={forcececloud} alt="" className='complogo' />
                            <div className='skillbartxt2'>
                                <h2>Salesforce Developer, 4CE Cloud Labs, Bangalore Nov 2023 – July 2024</h2><br />
                                <p>Salesforce Administration, Salesforce Mobile Publisher, Experience Cloud, Apex, Salesforce LWC, Sales Cloud, Financial Services Cloud, Omniscripts</p>
                                <div className="logos2">
                                    <img src={salesforce} alt="" className='logo2-salesforce' />
                                    <img src="https://www.awesomelwc.com/resources/lwc.png" alt="LWC logo" className='logo2' />
                                    <img src="https://rules.sonarsource.com/images/language-logos/color/apex.svg" alt="Apex logo" className='logo2' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

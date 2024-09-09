import React from 'react'
import { Link } from 'react-scroll'
import forcececloud from "./4celoud.svg"
import salesforce from "./Salesforce Logo.jpeg"
import "./styles.css"



export default function Experience() {
    return (
        <section id="experience">

            <div className="container">

                <div className='skillbars2'>
                    <div className="skillbars">
                        <div className="conts2">
                            <img src={forcececloud} alt="" className='complogo' />
                            <div className='skillbartxt2'>
                                <h2>Salesforce Developer, 4CE Cloud Labs, Bangaluru Nov 2023 – July 2024</h2><br />
                                <b className='bold'>o Build several reusable LWC component templates for a Mobile Banking Application Project - </b>I facilitated the
                                team's introduction and developed a range of reusable Lightning Web Components (LWC) templates and UI
                                elements. These components possess dynamic and configurable properties, significantly diminishing code
                                redundancy and enhancing performance optimization. <br /><br />
                                <b className='bold'>o Assisted and built the Integration architecture - </b>An Integration Framework that dynamically incorporates Apex,
                                Lightning Web Components (LWC), and Salesforce Metadata, implemented for a Mobile Banking Application.
                                <br /><br />
                                <b className='bold'>o Configured Business Rule Engine and Omniscripts - </b>
                                Configured the Business Rule Engine and Omniscript flow for customer onboarding/ Lead Generation optimally for
                                a Mobile Banking Loan Application process, using the Salesforce Financial Services Cloud, Omniscripts and
                                Business Rule Engine.
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

import "./works.css"
import djangoportfolio from "../../assets/djangoportfolio.png";
import djangocrm from "../../assets/Djangocrm.png";
import djangotwitterclone from "../../assets/django-twitter-clone.png"
import loadingani from "../../assets/loading_animation2.png";
import gamesite from "../../assets/gamesite.png";
import mernBookstore from "../../assets/mern-bookstore.png";
import aipdfchatting from "./../../assets/Screenshot 2024-09-04 135043.png"
import financetracking from "./../../assets/Screenshot 2024-07-26 115304.png";
import cryptoWallet from "./../../assets/Screenshot 2024-09-15 091146.png";




import React from 'react'

export default function works() {
    return (
        <section id="works">
            <div className="scroller">
                <div class="main">
                    <h1>Projects</h1>
                    <p class="titledisc">Projects that showcase my expertise in some of the modern technolgies.</p>
                    <ul class="cards">

                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image">
                                    <img src={aipdfchatting} alt="Ai PDF Chatting" />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">AI SAAS – Chat with PDF </h2>
                                    <p class="card_text">An AI SaaS application that allows users to study any PDF document by simply asking questions about its content.</p>
                                    <div className="btns">
                                        <a href="https://github.com/Karthik150502/AI_PDF_Saas" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
                                        <a href="https://docai-ai-pdf-saas.vercel.app/" rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src={financetracking} /></div>
                                <div class="card_content">
                                    <h2 class="card_title">AI Finance and Income Tracking Application</h2>
                                    <p class="card_text">AI powered personal finance tracking application to track expenses. </p>
                                    <div className="btns">
                                        <a href="https://github.com/Karthik150502/AI-Finance-Tracker-" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src={cryptoWallet} /></div>
                                <div class="card_content">
                                    <h2 class="card_title">Crypto Wallet</h2>
                                    <p class="card_text">A in-momory stored HD Crypto wallet for Solana.</p>
                                    <div className="btns">
                                        <a href="https://github.com/Karthik150502/Crypto-Wallet-Bango" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
                                        <a href="https://crypto-wallet-bango.vercel.app/" rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src={djangotwitterclone} /></div>
                                <div class="card_content">
                                    <h2 class="card_title">Django - Twitter Clone</h2>
                                    <p class="card_text">An adaptation of twitter, called Junes. Built using Django.</p>
                                </div>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </section>
    )
}

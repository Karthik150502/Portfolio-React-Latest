import "./works.css"
import djangoportfolio from "../../assets/djangoportfolio.png"
import djangocrm from "../../assets/Djangocrm.png"
import djangotwitterclone from "../../assets/django-twitter-clone.png"
import loadingani from "../../assets/loading_animation2.png"
import gamesite from "../../assets/gamesite.png"
import mernBookstore from "../../assets/mern-bookstore.png"
import aipdfchatting from "./../../assets/Screenshot 2024-09-04 135043.png"
import financetracking from "./../../assets/Screenshot 2024-07-26 115304.png"




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
                                    <p class="card_text">An AI SaaS application that allows users to study any PDF document by simply asking questions about its content. The app uses the OpenAI 'text-embedding-ada-2' model for text embeddings, stored in PineconeDB, and the original PDF is kept in AWS S3. User queries are converted to vector embeddings, which are matched to relevant document content and answered using the 'gpt-3.5-turbo' model. Stripe is integrated for payments to enhance AI capabilities for users.</p>
                                    <div className="btns">
                                        <a href="https://github.com/Karthik150502/AI_PDF_Saas" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src={financetracking} /></div>
                                <div class="card_content">
                                    <h2 class="card_title">AI Finance and Income Tracking Application</h2>
                                    <p class="card_text">AI powered personal finance tracking application to track expenses. Segregate the Budgets, Expenses, and Income, take some insights from AI, and apply your decision accordingly. Leveraged the latest features of the NextJs, applied Drizzle ORM for managing data and used OpenAI for providing the insights on the user’s current financial state.</p>
                                    <div className="btns">
                                        <a href="https://github.com/Karthik150502/AI-Finance-Tracker-" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src={mernBookstore} /></div>
                                <div class="card_content">
                                    <h2 class="card_title">A E-Bookstore, demonstrating the  CRUD operations and interacativity in contrast.</h2>
                                    <p class="card_text">Built using the MERN Stack technologies, MongoDB for storing data, and ReactJs as the frontend framework with ExpressJs and NodeJS in backend, also learned the basics of how building full-stack applications would be.</p>

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

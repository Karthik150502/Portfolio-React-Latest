import "./works.css"

import doorbin_video from "../../assets/Screenshot 2024-09-27 213437.png"
import aipdfchatting from "./../../assets/Screenshot 2024-09-04 135043.png"
import cryptoWallet from "./../../assets/Screenshot 2024-09-15 091146.png";
import docaiSaasLandingPageVideo from "./../../assets/Videos/Recording 2024-10-09 213039.mp4"
import { motion } from 'framer-motion';


import React from 'react'

const PORTFOLIO = [
    {
        title: "AI SAAS – Chat with PDF",
        description: "An AI SaaS application that allows users to study any PDF document by simply asking questions about its content.",
        isVideo: false,
        image: aipdfchatting,
        source: "https://github.com/Karthik150502/AI_PDF_Saas",
        demo: "https://docai-ai-pdf-saas.vercel.app/"
    },
    {
        title: "Doorbin - Video Conferencing",
        description: "A Video Conferencing Application, used the Stream Video Calling SDK.",
        isVideo: false,
        image: doorbin_video,
        source: "https://github.com/Karthik150502/Next-Video-Conferencing",
        demo: "https://doorbin-video-conferencing.vercel.app/"
    },
    {
        title: "Bango - Crypto Wallet",
        description: "A in-momory stored HD Crypto wallet for Solana.",
        isVideo: false,
        image: cryptoWallet,
        source: "https://github.com/Karthik150502/Crypto-Wallet-Bango",
        demo: "https://crypto-wallet-bango.vercel.app/"
    },
    {
        title: "SaaS Landing",
        description: "A modern AI Saas landing page, built using some modern frontend tools, like framer-motion, etc.,",
        isVideo: true,
        video: docaiSaasLandingPageVideo,
        image: "",
        source: "https://github.com/Karthik150502/Stunning-Landing-Page",
        demo: "https://docai-landing-page.vercel.app/"
    },

]


export default function works() {
    return (
        <section id="works" style={{
            margin: "auto 0"
        }}>
            <div class="scroller">
                <div class="main">
                    <div className="header">
                        <h1>Projects</h1>
                        <p class="titledisc">Projects that showcase my expertise in some of the modern technolgies.</p>
                    </div>
                    <div class="cards" onMouseOver={() => {

                    }}>
                        <motion.div
                            initial={{
                                translateX: "-50%"
                            }}
                            animate={{
                                translateX: "0",
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 30,
                                ease: "linear"
                            }}
                            class="scroll-container"
                        >

                            {
                                [...PORTFOLIO, ...PORTFOLIO].map((item) => {
                                    return <div className="card-new" style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        height: "400px",
                                        width: "375px",
                                    }}>
                                        <div class="image" style={{
                                            height: "175px",
                                            width: "100%",
                                        }}>
                                            {
                                                item.isVideo ? (
                                                    <video style={{
                                                        height: "100%",
                                                        width: "100%",
                                                    }} controls autoPlay >
                                                        <source src={item.video} type="video/mp4" />
                                                    </video>
                                                ) : (
                                                    <img src={item.image} alt="AI Enabled PDF Chatting" style={{
                                                        height: "100%",
                                                        width: "100%"
                                                    }} />
                                                )
                                            }

                                        </div>
                                        <div class="image" style={{
                                            height: "225px",
                                            width: "100%",
                                            background: "linear-gradient(to bottom left, #033b55 40%, aqua)"
                                        }}>
                                            <div className="content" style={{
                                                width: "100%",
                                                height: "150px",
                                                display: "flex",
                                                alignItems: "start",
                                                justifyContent: "start",
                                                gap: "5px",
                                                flexDirection: "column",
                                                padding: "10px 15px",
                                            }}>
                                                <p style={{
                                                    fontSize: "25px",
                                                    fontWeight: "bolder",
                                                    color: "white"
                                                }}>
                                                    {item.title}
                                                </p>
                                                <p style={{
                                                    fontSize: "15px",
                                                    fontWeight: "bolder",
                                                    color: "white"
                                                }}>{item.description}</p>
                                            </div>
                                            <div className="buttons" style={{
                                                height: "75px",
                                                widows: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-around"
                                            }}>
                                                <a href={item.source} rel="noreferrer" target="_blank" class="btn card_btn">Source</a>                                                    <a href={item.demo} rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </motion.div>




                    </div>
                </div>
            </div>
        </section >
    )
}



// <ul class="cards">

// <li class="cards_item">
//     <div class="card">
//         <div class="card_image">
//             <img src={aipdfchatting} alt="AI Enabled PDF Chatting" />
//         </div>
//         <div class="card_content">
//             <h2 class="card_title">AI SAAS – Chat with PDF</h2>
//             <p class="card_text">An AI SaaS application that allows users to study any PDF document by simply asking questions about its content.</p>
//             <div class="btns">
//                 <a href="https://github.com/Karthik150502/AI_PDF_Saas" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
//                 <a href="https://docai-ai-pdf-saas.vercel.app/" rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
//             </div>
//         </div>
//     </div>
// </li>
// <li class="cards_item">
//     <div class="card">
//         <div class="card_image"><img src={doorbin_video} alt="Doorbin Video Conferencing" /></div>
//         <div class="card_content">
//             <h2 class="card_title">Doorbin - Video Conferencing</h2>
//             <p class="card_text">A Video Conferencing Application, used the Stream Video Calling SDK.</p>
//             <div class="btns">
//                 <a href="https://github.com/Karthik150502/Next-Video-Conferencing" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
//                 <a href="https://doorbin-video-conferencing.vercel.app/" rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
//             </div>
//         </div>
//     </div>
// </li>


// <li class="cards_item">
//     <div class="card">
//         <div class="card_image"><img src={cryptoWallet} alt="Bango - HD Crypto Wallet" /></div>
//         <div class="card_content">
//             <h2 class="card_title">Bango - Crypto Wallet</h2>
//             <p class="card_text">A in-momory stored HD Crypto wallet for Solana.</p>
//             <div class="btns">
//                 <a href="https://github.com/Karthik150502/Crypto-Wallet-Bango" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
//                 <a href="https://crypto-wallet-bango.vercel.app/" rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
//             </div>
//         </div>
//     </div>
// </li>
// <li class="cards_item">
//     <div class="card">
//         <div class="card_image">

//             <video width="500" height="275" controls >
//                 <source src={docaiSaasLandingPageVideo} type="video/mp4" />
//             </video>
//         </div>
//         <div class="card_content">
//             <h2 class="card_title">SaaS Landing</h2>
//             <p class="card_text">A modern AI Saas landing page, built using some modern frontend tools, like framer-motion, etc.,</p>
//             <div class="btns">
//                 <a href="https://github.com/Karthik150502/Stunning-Landing-Page" rel="noreferrer" target="_blank" class="btn card_btn">Source</a>
//                 <a href="https://docai-landing-page.vercel.app/" rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
//             </div>
//         </div>
//     </div>
// </li>

// </ul>
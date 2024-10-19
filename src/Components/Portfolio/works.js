import "./works.css"
import doorbin_video from "../../assets/Screenshot 2024-09-27 213437.png"
import aipdfchatting from "./../../assets/Screenshot 2024-09-04 135043.png"
import cryptoWallet from "./../../assets/Screenshot 2024-09-15 091146.png";
import docaiSaasLandingPageVideo from "./../../assets/Videos/Recording 2024-10-09 213039.mp4"
import { motion } from 'framer-motion';


import React, { useState } from 'react'
import ProjectCard from "../Projects/card";

const PORTFOLIO = [


    {
        title: "Bango - Crypto Wallet",
        description: "A in-momory stored HD Crypto wallet for Solana.",
        isVideo: false,
        image: cryptoWallet,
        source: "https://github.com/Karthik150502/Crypto-Wallet-Bango",
        demo: "https://crypto-wallet-bango.vercel.app/"
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
        title: "SaaS Landing",
        description: "A modern AI Saas landing page, built using some modern frontend tools, like framer-motion, etc.,",
        isVideo: true,
        video: docaiSaasLandingPageVideo,
        image: "",
        source: "https://github.com/Karthik150502/Stunning-Landing-Page",
        demo: "https://docai-landing-page.vercel.app/"
    },
    {
        title: "AI SAAS – Chat with PDF",
        description: "An AI SaaS application that allows users to study any PDF document by simply asking questions about its content.",
        isVideo: false,
        image: aipdfchatting,
        source: "https://github.com/Karthik150502/AI_PDF_Saas",
        demo: "https://docai-ai-pdf-saas.vercel.app/"
    },

]


export default function Works() {

    const [stopSlide, setStopSlide] = useState(false);


    return (


        <section className='pt- md:py-12' id="works">
            <div className="container">
                <h2 className='text-5xl md:text-6xl font-bold text-center tracking-tighter'>Some latest projects</h2>
                <p className='text-black/70 text-center text-lg md:text-xl max-w-sm mx-auto tracking-tight mt-3 font-bold'>Here are some of my works</p>
                <div className='overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] pb-16 pt-2 cursor-crosshair' onMouseEnter={() => {
                    setStopSlide(true);
                }}
                    onTouchStart={() => {
                        setStopSlide(true);
                    }}

                    onTouchEnd={() => {
                        setStopSlide(false);
                    }}
                    onMouseLeave={() => {
                        setStopSlide(false);
                    }}
                >
                    <motion.div

                        initial={stopSlide ? {} : {
                            translateX: "-50%"
                        }}
                        animate={stopSlide ? {} : {
                            translateX: "0",
                        }}
                        transition={stopSlide ? {} : {
                            repeat: Infinity,
                            duration: 25,
                            ease: "linear",
                        }}
                        className="flex gap-5">
                        {
                            [...PORTFOLIO, ...PORTFOLIO].map((item) => {
                                return <ProjectCard item={item} />
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </section>
    )
}



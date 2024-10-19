import React from 'react'

export default function ProjectCard({ item }) {
    return (
        <div className="card-new flex items-center justify-center flex-col h-[400px] w-[375px]">
            <div class="image h-[175px] w-full">
                {
                    item.isVideo ? (
                        <video className='h-full w-full' controls autoPlay >
                            <source src={item.video} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={item.image} alt="AI Enabled PDF Chatting" className='w-full h-full' />
                    )
                }

            </div>
            <div class="image h-[225px] w-full bg-gradient-to-bl from-[#033b55] via-teal-600 to-blue-950">
                <div className="content w-full h-[150px] flex items-start justify-start gap-[5px] flex-col px-[10px] py-[15px]">
                    <p className='text-white text-[25px] font-bold'>
                        {item.title}
                    </p>
                    <p className='font-medium text-[15px] text-white' >{item.description}</p>
                </div>
                <div className="buttons h-[75px] flex items-center justify-around" style={{
                    widows: "100%",
                }}>
                    <a href={item.source} rel="noreferrer" target="_blank" class="btn card_btn">Source</a>                                                    <a href={item.demo} rel="noreferrer" target="_blank" class="btn card_btn">Demo</a>
                </div>
            </div>
        </div>
    )
}

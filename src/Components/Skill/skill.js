import React from 'react'
import "./skill.css"
import webdesg from "../../assets/webdesign.png"
import coding from "../../assets/coding.png"
import backend from "../../assets/backend.png"
import database from "../../assets/database.png"
import drizzleLogo from "./drizzle.svg"
import javascript from "./javascript.svg"
import typescript from "./typescript.svg"
import java from "./java.svg"
import pinecone from "./pinecone.svg"
import cloud from "./cloud.svg"
import react from "./react.svg"
import next from "./next.svg"




export default function skill() {
     return (
          <section id="skills">
               <h2 className='text-5xl md:text-6xl font-bold text-center tracking-tighter'>Skills</h2>
               <div className='skillbars'>
                    <div className="skillbar">
                         <div className="conts">

                              <img src={backend} alt="" />
                              <div className='skillbartxt'>
                                   <h2>Backend</h2>
                                   <p>Have quite some amount of work put into NodeJs and have buit various projects, and deployed it. Have used NodeJs as a backend for a E-Bookstore application. Worked with Python and Django to build some impressive projects as well.</p>
                              </div>
                         </div>
                         <div className="logos">
                              <img src="https://nodejs.org/static/logos/nodejsStackedDark.svg" alt="Nodejs Logo" className='logo' />
                              <img src="https://static.djangoproject.com/img/logos/django-logo-negative.png" alt="Django Logo" className='logo' />
                         </div>
                    </div>

                    <div className="skillbar">
                         <div className="conts">
                              <img src={webdesg} alt="" />
                              <div className='skillbartxt'>
                                   <h2>Web Design</h2>
                                   <p>Have solid front-end development expertise with a focus on React.js and Next.js, proficient in building dynamic and responsive user interfaces, leveraging state management tools like Redux to handle complex application states. Used modern styling frameworks like Tailwind CSS ensures clean and visually appealing designs.</p>
                              </div>
                         </div>

                         <div className="logos">
                              <img src={react} alt="React Logo" className='logo' />
                              <img src={next} alt="Next Logo" className='logo' />
                              <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML Logo" className='logo' />
                              <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS Logo" className='logo' />
                              <img src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" alt="Tailwind Logo" className='logo' />
                              <img src="https://img.icons8.com/?size=100&id=84710&format=png&color=000000" alt="Bootstrap Logo" className='logo' />
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8XFxkAAAAQEBMVFRiZmZrBwcHExMRjY2S/v7/l5eVfX2Di4uKbm5uUlJWXl5dnZ2gJCQz5+fkAAAVHR0iQkJGioqPv7+9aWlusrKw7Oz2Dg4PX19ciIiMwMDHPz897e3xwcHEnJymHh4honTguAAADWklEQVR4nO2d23baMBBFZZm2UBISu9xya0jz//9YE0oLyA8xnRmNjs/+AC2dtaUZZBs7BEIIIYQQQgghhBBCCCGEEPJ52of54/LpOfc09JjF2NR1jNM290yUWMRJ9UF8wYy4itWROM89GQ0W/wJ2EQH34lnAKi5yz0ec84BVc597QtJcBKwatI14GbCKu9xTkuXuMmAVv+WekyiJwar+mXtOoqQGJ1jNIjU4ibPck5LkSxKwwgqYLlEGLAv4JZoGBCsytzRYOKnBEQT8mntSksDvwb6A8AYZsCT6igzUiRe+ivY1eqiA8Ab7LllABYRfon0BoaooA5ZOX5GBCkiDpUODpUODpTPCgGAn+r77g1AB+5Yo1GVDGiydERoEq6Ij7INgS7TvHj1UQPglygu/pUODpcMqWjpcoqUDv0TZJkqHBksHvorC35vgUxalAx8Qvk3QYOnAG2Sb+A/a2Xr9KjTW1SgGbHdxT/0gM9yVKD6U/r06jF3HN5kBr0LR4E2sj2PGd5khr0CxTZwE7CJuZAYdjI3BfcJbmVGHYmUw21syNIvMecCqXsqMOww7g53DrczAgzA0mGcfKgZMDGappaYGq7iSGXoAxganMkMPwNigfZkxDmjfCzUD/kAPiG7wZowGoYoM24QJxgGxDLooMoonevg24cOg4nMyPgxqLlEXBuH3oLFB+zZhHNC+0RsXGSyDjYc9SIPX02fQPqCmQRdVVDMgusGNi0Y/wiUq9ryojxO94n94+wLafwxB8V/YPvqgsUEPe1DOoIsiA28wDSj2ClwfRaYvILxBracsxmDQ/qeaYpHxYVDxcwxe96BYH/RhULFN+Ai4sv0tSoPiGP+S8VBkaPCz+DCoWGRGadA+4AO6wfb4mVp5gz4ChvWlQjCDIcwbbIMhPNY6AX20iT3LWiWgG4Mh7KJGQB8n+gPPJwnhisyBbTQJmGcPftC+/IlYYxrsaLcxNk2Mv4Q+U+vM4GFOi+n8SepP2B4DigIf0FObUGFTgxsMb8lRLMM9ek02aUAsg2F2mRBrD4b0sIlmMLkiAmcwhNcIHjCE00fyIAOeLlOwNvGX+2NEvCJz5L07qNTdSSXfe2XU2ay3y+0611tlCCGEEEIIIYQQQgghhBBCCCGEEO/8BlBOLGDtdO/PAAAAAElFTkSuQmCC" alt="Shadcn Logo" className='logo' />
                         </div>
                    </div>

                    <div className="skillbar">
                         <div className="conts">
                              <img src={database} alt="" />
                              <div className='skillbartxt'>
                                   <h2>Database</h2>
                                   <p>Worked extensively with PostgreSQL, MySQL, and MongoDB. And i am proficient in using ORMs like Prisma and Drizzle to interact with databases efficiently, ensuring smooth data handling and optimized performance in the applications.</p>
                              </div>
                         </div>
                         <div className="logos">
                              <img src="https://img.icons8.com/?size=100&id=11572&format=png&color=000000" alt="MySql Logo" className='logo' />
                              <img src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" alt="Postgresql Logo" className='logo' />
                              <img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="Postgresql Logo" className='logo' />
                              <img src={drizzleLogo} alt="Drizzle ORM Logo" className='logo' />
                              <img src={pinecone} alt="Pinecone Logo" className='logo' />

                         </div>
                    </div>

                    <div className="skillbar">
                         <div className="conts">
                              <img src={coding} alt="" />
                              <div className='skillbartxt'>
                                   <h2>Programming</h2>
                                   <p>I am proficient in few programming languages, including JavaScript, TypeScript, Python, and Java. My experience spans both backend and frontend development.</p>
                              </div>
                         </div>

                         <div className="logos">
                              <img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" alt="Python Logo" className='logo' />
                              <img src={javascript} alt="Javascript Logo" className='logo' />
                              <img src={typescript} alt="Typescript Logo" className='logo' />
                              <img src={java} alt="Java Logo" className='logo' />
                         </div>
                    </div>
                    <div className="skillbar">
                         <div className="conts">
                              <img src={cloud} alt="Cloud" />
                              <div className='skillbartxt'>
                                   <h2>Cloud</h2>
                                   <p>Put into use some of the key Amazon Web Services, like S3 Bucket. And have decent grip with Cloud Storage and Cloud services and how they function. </p>
                              </div>
                         </div>

                         <div className="logos">
                              <img src="https://ap-southeast-2.signin.aws.amazon.com/v2/assets/_next/static/media/aws-logo@2x.7c50e6f9.png" alt="AWS Logo" className='logo' />
                         </div>
                    </div>
               </div>

          </section>
     )
}

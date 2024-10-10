import React, { useState } from 'react'
import "./navBar.css";
import logo from "../../assets/logo-black-removebg-black.png";
import menu from "../../assets/burgermenu.png";
import { Link } from 'react-scroll';
export default function Navbar() {
        const [showMenu, setShowMenu] = useState(false)
        return (
                <nav className="navbar">
                        <a href='intro'><img src={logo} className='logo' alt="Logo" /></a>

                        <div className="desktopmenu">
                                <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-90} className="desktopmenulistitem">
                                        Home
                                </Link>
                                <Link activeClass='active' to='experience' spy={true} smooth={true} duration={500} offset={-90} className="desktopmenulistitem">
                                        Experience
                                </Link>
                                <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-85} className="desktopmenulistitem">
                                        About
                                </Link>
                                <Link activeClass='active' to='works' spy={true} smooth={true} duration={500} offset={-90} className="desktopmenulistitem">
                                        Portfolio
                                </Link>
                                <Link activeClass='active' to='contactpage' spy={true} smooth={true} duration={500} offset={-70} className="desktopmenulistitem">
                                        Hireme
                                </Link>
                        </div>

                        <button className="desktopmenubtn" onClick={() => {
                                document.getElementById('contactpage').scrollIntoView({ behavior: 'smooth', offset: "100" })
                        }}>
                                <img src="" className='desktopmenuimg' alt="" />
                                Contact me
                        </button>


                        <img src={menu} className='mobmenu' alt="Menu" onClick={() => { setShowMenu(!showMenu) }} />
                        <div className="navmenu" style={{ display: showMenu ? 'flex' : 'none' }} >
                                <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-90} onClick={() => { setShowMenu(false) }} className="listitem">
                                        Home
                                </Link>
                                <Link activeClass='active' to='experience' spy={true} smooth={true} duration={500} offset={-85} onClick={() => { setShowMenu(false) }} className="listitem">
                                        Experience
                                </Link>
                                <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-85} onClick={() => { setShowMenu(false) }} className="listitem">
                                        About
                                </Link>
                                <Link activeClass='active' to='works' spy={true} smooth={true} duration={500} offset={-90} onClick={() => { setShowMenu(false) }} className="listitem">
                                        Portfolio
                                </Link>
                                <Link activeClass='active' to='contactpage' spy={true} smooth={true} duration={500} offset={-85} onClick={() => { setShowMenu(false) }} className="listitem">
                                        Contact
                                </Link>

                        </div>


                </nav>
        )
}

import React, { useState } from 'react'
import Navbar from './Components/Navbar/navBar'
import Intro from './Components/Intro/intro'
import Skill from "./Components/Skill/skill"
import Work from "./Components/Portfolio/works"
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Experience from './Components/Experience/exp'
// DarkMode Enabler
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const mainStyle = {
  height: "auto"
}


export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });


  return (
    <div style={mainStyle}>

      <Navbar />
      <Intro />
      <Experience />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

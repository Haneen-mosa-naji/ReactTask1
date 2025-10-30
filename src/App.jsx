import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Portfoliol from './Components/Portfolio/Portfolio.jsx'
import About from './Components/Aboutt/About.jsx'
import Footer from './Components/Footer/Footer.jsx'
import  Contact from './Components/ContactMe/ContactMe.jsx'
function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfoliol/>
      <About/>
        <Contact/>
      <Footer/>
    
    </>
  )
}

export default App

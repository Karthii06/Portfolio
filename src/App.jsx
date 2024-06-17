import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Portfolio/Home'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Navbar from './Portfolio/Navbar'
import Education from './Portfolio/Education'
import Contact from './Portfolio/Contact'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  
  return (
    < div id='app'>
    <Navbar/>
     <Home/>
    <Education/>
    <Projects/>
    <Skills/>
    <Contact/>
    </div>
)
}

export default App

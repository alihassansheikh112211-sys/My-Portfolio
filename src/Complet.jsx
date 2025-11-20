import React from 'react'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Reapeted-Components/Header'
import Footer from './Components/Reapeted-Components/Footer'
import Contact from './Components/UI/Contact'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Experienceme from './Pages/Experienceme'
import Educationme from './Pages/Educationme'
import Skillme from './Pages/Skillme'
import Contactme from './Pages/Contactme'

function Complet() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutme />} />
                <Route path="/experience" element={<Experienceme />} />
                <Route path="/education" element={<Educationme />} />
                <Route path="/skill" element={<Skillme />} />
                <Route path="/contact" element={<Contactme />} />
            </Routes>
            <Contact />
            <Footer />
        </BrowserRouter>
    )
}

export default Complet

import React from 'react'
import Hero from '../Components/UI/Hero'
import About from '../Components/UI/About'
import Experience from '../Components/UI/Experience'
import Skill from '../Components/UI/Skill'
import Education from '../Components/UI/Education'

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skill />
        </div>
    )
}

export default Home

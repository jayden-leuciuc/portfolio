import React from 'react'
import './Hero.scss'
import {AiOutlineArrowDown} from 'react-icons/ai'
import './About'


function Hero() {
    const scrollToAbout = () => {
        document.querySelector('#aboutId').scrollIntoView({
            behavior: "auto"
        })
    } 

    return (
        <div className="hero-container">
            <div className="text-container">
                <h1 className="intro">Hi, i'm</h1>
                <h1 className="name">Jayden Leuciuc</h1>
                <p>Self-taught web developer</p>
            </div>  
            <div className="icon-container">
                <button onClick = {scrollToAbout}>
                <AiOutlineArrowDown className="iconArrow" />
                </button>
                
            </div>
        </div>
    )
}

export default Hero

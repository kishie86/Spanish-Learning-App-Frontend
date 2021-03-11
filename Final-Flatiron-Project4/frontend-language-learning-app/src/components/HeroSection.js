import React from 'react'
import '../components/HeroSection.css'
import Button from './Button'

function HeroSection(){
    return (
        <div className= 'hero-container'>
            <video src = 'videos/video-2.mp4' autoPlay loop muted />
            <strong><h1 style={{color: "white"}}>Welcome to Libby's Language Learning App </h1></strong>
            <h4 style={{color: "white"}}>Love the Language you Speak!</h4>
            <Button className = 'btns' buttonStyle='btn--outline'
            buttonSize= 'btn--large'
            >
                GetStarted
            </Button>
        </div>
    )
}

export default HeroSection
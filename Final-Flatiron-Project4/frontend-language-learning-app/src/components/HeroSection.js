import React from 'react'
import '../components/HeroSection.css'
import Button from './Button'

function HeroSection(){
    return (
        <div className= 'hero-container'>
            <video src = 'videos/video-2.mp4' autoPlay loop muted />
            <h1>Welcome to Libby's Language Learning App</h1>
            <p>Love the Language you Speak!</p>
            <Button className = 'btns' buttonStyle='btn--outline'
            buttonSize= 'btn--large'
            >
                GetStarted
            </Button>
        </div>
    )
}

export default HeroSection
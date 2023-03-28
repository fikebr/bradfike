import React from 'react'
import '../App.css'
import './HeroSection.css';
import video from '../assets/videos/starynight-2.mp4';

// document.querySelector('video').playbackRate = .5;
// TODO: slow down the video. I think use useEffect and useRef

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted></video>
            <h1>BRAD FIKE</h1>
        </div>
    )
}

export default HeroSection
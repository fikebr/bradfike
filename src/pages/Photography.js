import React from 'react';
import '../App.css';
import { IMAGES } from '../utils/images';
import Footer from '../components/Footer';

const Photography = () => {
    return (
        <>
            <img class="background" style={styles.background} src={IMAGES[5]} alt="background" width="300" height="300"></img>
            <h1 className='photography' style={styles.h1}>Photography</h1>
            <Footer />
        </>
    );
};


const styles = {
    h1: {
        // 'background-image': `url(${IMAGES[5]})`
    },
 
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0px",
        top: "0px",
        "z-index": "-1",
        filter: "blur(10px)",
    }
}


export default Photography;
import React from 'react';
import '../../App.css';
import { IMAGES } from '../images';

const styles = {
    'background-image': `url(${IMAGES[5]})`
}

const Signup = () => {
    return (
        <h1 className='signup' style={styles}>SIGN-UP</h1>
    );
};

export default Signup;
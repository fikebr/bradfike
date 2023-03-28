import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Me</h2>
                        <Link to='/'>About Me</Link>
                        <Link to='/'>Resume</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Me</h2>
                        <Link to='/'>Email Me</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Github</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

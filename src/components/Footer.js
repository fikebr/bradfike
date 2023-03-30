import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer-container footer mt-auto py-3 bg-dark'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Me</h2>
                        <Link to='/'>About Me</Link>
                        <Link to='/'>Resume</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Me</h2>
                        <Link to='/'>Email Me</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Github</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

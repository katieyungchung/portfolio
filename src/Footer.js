import React from 'react';  
import './Footer.css';

const Footer = () => {

    return (
        <>
        
        <div className="footer-div">
        <hr className="footer-div-line"></hr>
        <div className="footer-bottom">
            <div className="footer-left">
                <p>Made with <span style={{ fontSize: '20px'}}>♡</span> by Katie Chung</p>
            </div>
            <div className="footer-right">
                <a href="https://github.com/katieyungchung" target="_blank"><div className="footer-icon" id="footer-icon1"></div></a>
                <a href="https://www.linkedin.com/in/katie-chung-6a94261b6/" target="_blank"><div className="footer-icon" id="footer-icon2"></div></a>
                <a href="mailto:katieyungchung@g.ucla.edu" target="_blank"><div className="footer-icon" id="footer-icon3"></div></a>
                
            </div>
        </div>
            
        </div>
        </>
    );
}

export default Footer;
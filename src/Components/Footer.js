import React from "react";
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';
import Facebook from '../assets/facebook.png';

import '../styles/footer.css';

function Footer() {
    return(
        <div className="footer-section">
            <div className="images">
                <img src={Facebook} alt="Facebook-logo" />
                <img src={Instagram} alt="Instagram-logo" />
                <img src={Twitter} alt="Twitter-logo" />
                <img src={Youtube} alt="Youtube-logo" />
            </div>
            <div className="footer-info">
                <p>Conditions of Use</p>
                <p>Privacy Policy</p>
                <p>Press Room</p>
            </div>
            <div className="copyright">
                <p>&copy; Vince Churchill Ankrah, 2023</p>
            </div>
        </div>
    )
}

export default Footer;
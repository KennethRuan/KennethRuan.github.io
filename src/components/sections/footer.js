import React from 'react';
import { Link } from 'gatsby';
import {footerContainer, socialMedia, socialMediaWrap, socialIcons, socialIconLink, socialIcon, footerText} from '../../styles/footer.module.css'
import '../../styles/global.css'

const Footer = () => {
    
    return (
        <div className={footerContainer}>
            <div className={footerText}>
                <p> Crafted with care by Kenneth Ruan.</p>
                <p> Inspired by <a href="https://github.com/bchiang7">Brittany Chiang's</a> amazing work.</p>
            </div>
            <section className={socialMedia}>
                <div className={socialMediaWrap}>
                    <div className={socialIcons}>
                        <Link className={socialIconLink}
                            to="https://github.com/KennethRuan"
                            target="_blank"
                            aria-label="Github">
                            <img className={socialIcon} alt="Github Logo" src="./github-icon.png"/>
                        </Link>
                        <Link className={socialIconLink}
                            to="https://devpost.com/KennethRuan"
                            target="_blank"
                            aria-label="Devpost">
                            <img className={socialIcon} alt="Devpost Logo" src="./devpost-icon.png"/>
                        </Link>
                        <Link className={socialIconLink}
                            to="https://www.linkedin.com/in/kenneth-ruan-4107651a1/"
                            target="_blank"
                            aria-label="Devpost">
                            <img className={socialIcon} alt="Linkedin Logo" src="./linkedin-icon.png"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
    
}

export default Footer;
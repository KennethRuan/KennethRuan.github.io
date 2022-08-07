import { graphql, Link } from 'gatsby';
import React from 'react'
import '../../styles/global.css'
import { aboutContainer, skillsList, bioText, bioHeadshot, bioWrapper} from '../../styles/about.module.css'


const About = () => {
    return ( 
        <div className="section" id="about">
            <h1>About Me</h1>
            <div className={aboutContainer}>
                <div className={bioWrapper}>
                    
                    <div className={bioText}>
                        <p>Hello! I'm Kenneth, a Software Engineering student at the University of Waterloo.</p>
                        <p>I love innovating and bringing new ideas to the table. Anything that involves creativity is my cup of tea! Whether it be graphic design, creating events or doing hackathons. My goal is always to build inventive and impactful projects.</p>
                        <p>Here are some things I'm currently exploring!</p>
                        <ul className={skillsList}>
                            <li> Machine Learning </li>
                            <li> Learning Mandarin </li>
                            <li> Stardew Valley </li>

                        </ul>
                    </div>
                    <img src='./bio-pic.jpg' alt='Missing' className={bioHeadshot}/>
                </div>
            </div>
        </div>
    );
};

export default About;
import { graphql, Link } from 'gatsby';
import React from 'react'
import '../../styles/global.css'
import { aboutContainer, skillsList } from '../../styles/about.module.css'


const About = () => {
    return ( 
        <div className={`section ${aboutContainer}`} id="about">
            {/* <Link to="/page-2/">yee</Link> */}
            <h1>About Me</h1>
            <p>Hello! I'm Kenneth, a MaCS student at William Mackenzie CI.</p>
            <p>I love innovating and bringing new ideas to the table. Anything that involves creativity is my cup of tea! Whether it be graphic design, creating events or doing hackathons. My goal is always to build inventive and impactful projects.</p>
            <p>Coding is a passion of mine. You can often find me participating in coding competitions and hackathons. The atmosphere and amazing people you meet is a special experience in itself.</p>
            <p>Outside of tech, I spend my free-time playing badminton or I may be sitting down to watch an NBA game. I adore both sports and I even compete in the <a href="http://www.badmintonontario.ca/"  target="_blank" className="bio-link"> Ontario Badminton League! </a></p>
            <p>Here are a few technologies I've worked with before:</p>
            <ul className={skillsList}>
                <li> Python </li>
                <li> Java </li>
                <li> C & C++ </li>
                <li> Tensorflow </li>
                <li> Flask </li>
                <li> React </li>
                <li> HTML & CSS </li>
                <li> 8085 Assembly </li>
            </ul>
        </div>
    );
};

export default About;
import { graphql, Link } from 'gatsby';
import React from 'react'
import '../../styles/global.css'


const About = () => {
    return ( 
        <div className={"section"} style={{height: "50vw"}} id="about">
            <Link to="/page-2/">yee</Link>
            <h1>About</h1>
        </div>
    );
};

export default About;
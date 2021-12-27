import { graphql, Link } from 'gatsby';
import React from 'react'
import { section } from '../../styles/home.module.css'

const About = () => {
    return (
        <div className={section} style={{"background-color":"red"}}>
            <Link to="/page-2/">yee</Link>
        </div>
    );
};

export default About;
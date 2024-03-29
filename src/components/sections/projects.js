import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react'
import {cardsGrid, cardContainer, cardTop, cardContent, projectTitle, projectDescription, projectTags, folder, featureGrid, featureContainer, featureImage, featureLeft, featureRight, featureText, featureTitle} from '../../styles/projects.module.css'
import '../../styles/global.css'


const Projects = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/content/projects/"}, frontmatter: {showInProjects: {ne: false}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            nodes {
            frontmatter {
                github
                tech
                title
            }
            html
            }
        }
    }
    `);
        
    console.log(data);
      
    const projects = data.allMarkdownRemark.nodes

    return ( 
        <div className="section" id="projects">
            <h1>Projects</h1>

            {/* <div className={featureGrid}>
                <div className={featureContainer}>
                    <div className={featureLeft}>
                        <div className={featureText}>
                            <h1> Autoslide </h1>
                            <p> An automatic image tool for PowerPOints, powered by machine learning. Autoslide automatically chooses images adn adds them to your powerpoints based on the content of your uploaded slides.</p>
                        </div>
                    </div>
                    <div className={featureRight}>
                        <div className={featureImage}>
                            <img id="test" src="./img-2.jpg" />
                        </div>
                    </div>
                </div>

            </div> */}


            <div className={cardsGrid}>
                {projects.map(project=>(
                <div className={cardContainer}>
                    {/* <a className={externalRef} href={project.frontmatter.github} target="_blank" rel="noreferrer"></a>  */}
                    <div className={cardTop}>
                        <img className={folder} src="./folder.svg"/>
                    </div>
                    <div className={cardContent}>
                        <div className={projectTitle}>
                            <a href={project.frontmatter.github} target="_blank" rel="noreferrer">
                                {project.frontmatter.title}
                            </a>
                        </div>
                        <div className={projectDescription} dangerouslySetInnerHTML={{__html:project.html}} />
                        <ul className={projectTags}>
                            {project.frontmatter.tech.map((tech) => (
                                <li> {tech} </li>
                            ))}
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
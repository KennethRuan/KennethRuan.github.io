import { graphql, useStaticQuery } from 'gatsby'
import React, {Component, useState} from 'react'

import '../../styles/global.css'
import {tabTitle, experienceTab, tabContainer, blocTabs, contentTabs, activeTab, tabs, activeContent, content, highlight, jobDescription} from '../../styles/jobs.module.css'



const Jobs = () => {
    const [currentTab, setCurrentTab] = useState(1);

    function handleClick(num){
        return () => {
            setCurrentTab(num);
        }
    }

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/jobs/"}, frontmatter: {showInJobs: {ne: false}}}
                sort: {fields: frontmatter___date, order: DESC}
            ) {
                nodes {
                frontmatter {
                    company
                    title
                    location
                    range
                    url
                }
                html
                }
            }
        }
    `);

    const jobs = data.allMarkdownRemark.nodes;

    return(
        <div className="section" id="jobs">
            <h1 className={tabTitle}> Experience </h1>
            <div className={experienceTab}>
                <div className={tabContainer}>
                    <div className={blocTabs}>
                        {jobs.map((job, i) =>(
                            <button className={currentTab === i ? [tabs, activeTab].join(' ') : tabs} onClick={handleClick(i)}>{job.frontmatter.company}</button>
                        ))}
                    </div>

                    <div className={contentTabs}>
                        {jobs.map((job, i) =>(
                            <div className={currentTab === i ? `${content} ${activeContent}` : `${content}`}>
                            <h2> {job.frontmatter.title} 
                                <a 
                                className= {highlight} 
                                href={job.frontmatter.url} 
                                target="_blank" 
                                style={{display: (job.frontmatter.url === '') ? "none":"inline"}}> @ {job.frontmatter.company}
                                </a>

                                <a 
                                className= {highlight} 
                                style={{display: (job.frontmatter.url === '') ? "inline":"none"}}> @ {job.frontmatter.company}
                                </a>

                            </h2>
                            <h3> {job.frontmatter.range} </h3>
                            <hr/>
                            <div className={jobDescription} dangerouslySetInnerHTML={{__html:job.html}}/>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
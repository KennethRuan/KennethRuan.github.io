import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { section } from '../../styles/home.module.css'

const Jobs = () => {
    // const data = useStaticQuery(graphql`
    // query {
    //     jobs: allMarkdownRemark(
    //         filter: { fileAbsolutePath: { regex: "/jobs/" } }
    //         sort: { fields: [frontmatter___date], order: DESC }
    //     ) {
    //         edges {
    //         node {
    //             frontmatter {
    //             title
    //             company
    //             location
    //             range
    //             url
    //             }
    //             html
    //         }
    //         }
    //     }
    //     }
    // `);
    // const jobsData = data.jobs.edges;
    return(
        <div className={section}>
            <h1>
                jobs
            </h1>
        </div>
    );
};

export default Jobs;
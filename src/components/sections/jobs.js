import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import '../../styles/global.css'

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
        <div className={"section"} style={{height: "50vw"}} id="jobs">
            <h1>
                Experience
            </h1>
        </div>
    );
};

export default Jobs;
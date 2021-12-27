/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

 const ReactDOM = require('react-dom')

 export function replaceHydrateFunction() {
     return (element, container, callback) => {
         ReactDOM.render(element, container, callback)
     }
 }

// You can delete this file if you're not using it

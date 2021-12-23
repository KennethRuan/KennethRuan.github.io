import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../components/sections/hero"
import Jobs from "../components/sections/jobs"
import Gallery from "../components/sections/gallery"
import Contact from "../components/sections/contact"
import About from "../components/sections/about"
import Seo from "../components/seo"
import "../styles/global.css"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <Hero initialTime={1} minTime={1} maxTime={1440}/>
    <About/>
    <Jobs/>
    <Gallery/>
    <Contact/>
  </div>
)

export default IndexPage;
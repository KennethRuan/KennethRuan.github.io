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

var dt = new Date();
var h = dt.getHours();
var m = dt.getMinutes();

var time = h*60+m;

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <Hero initialTime={time} minTime={1} maxTime={1440}/>
    <About/>
    <Jobs/>
    <Gallery/>
    <Contact/>
  </div>
)

export default IndexPage;
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Hero from "../components/sections/hero"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Jobs from "../components/sections/jobs"
import Gallery from "../components/sections/gallery"
import Contact from "../components/sections/contact"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import Seo from "../components/seo"
import "../styles/global.css"

const IndexPage = () => {
  var dt = new Date();
  var h = dt.getHours();
  var m = dt.getMinutes();

  var time = h*60+m;
  return(
    <div>
      <Seo title="Home" />
      <Hero initialTime={time} minTime={1} maxTime={1440} id="hero"/>
      <Header/>
      <About />
      <Jobs />
      <Projects />
      <Gallery />
      <Contact />
      <Navbar/>
    </div>
  );
};

export default IndexPage;
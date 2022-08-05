import { paperClasses } from '@mui/material';
import { graphql} from 'gatsby'
import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { navbarContainer, navbarList, navbarItem, tabs, activeTab} from '../styles/navbar.module.css'
import ReactDOM from 'react-dom';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            section: 0,
            opacity: 0,
            active: 0
        };

        this.sections = [
            'about',
            "jobs",
            "projects",
            "gallery",
            "contact"
        ];
        this.idToState = {
            'about':1,
            'jobs':2,
            'projects':3,
            'gallery':4,
            'contact':5
        };
        

    }

    componentDidMount(){
        // for (let i = 0; i < this.sections.length; i++){
        //     var elem = ReactDOM.findDOMNode(this.sections[i]);
        //     console.log(elem);
        //     if (elem !== null)
        //         this.sectionScrolls.push(elem.scrollHeight);
        // }
       
        // console.log(ReactDOM.findDOMNode("hero"));
        window.addEventListener('scroll', this.handleScroll.bind(this));    
        
        // Can be modularized
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    if (entry.target.id in this.idToState){
                        this.setState({
                            active: this.idToState[entry.target.id]
                        });
                        console.log("smth happened");
                    }
                    else {
                        console.log("key not found");
                    }
                }
            });
        }, {threshold: 0.5});

        document.querySelectorAll('.section').forEach(p => {observer.observe(p)});
        console.log(document.querySelectorAll('.section'));
    };
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll(){
        var winScroll = document.documentElement.scrollTop;
        var height = window.innerHeight;

        // console.log(winScroll);

        var tr = -30*(winScroll/height)+25
        var navbarOpacity = 1/(1+Math.pow(Math.E, tr))
        this.setState({
            opacity: navbarOpacity
        });
    }

    // handleClick(btnNum){
    //     console.log(btnNum);
    //     this.setState({ 
    //         autoscrolling: true,
    //         active: btnNum
    //     });
    // }

    render(){
        return(
            //implement code that obstructs the entire tab if it is on the hero page, so invisible buttons arent pressed
            <div className={navbarContainer} style={{"opacity": `${this.state.opacity}`}}>
                <ul className={navbarList}>
                    <li className={navbarItem}>
                        <button className={this.state.active === 1 ? activeTab : tabs}> 
                        <Link to="about" spy={true} smooth={true} offset={0} duration={500}> ABOUT </Link>
                        </button>
                    </li>
                    <li className={navbarItem}>
                    <button className={this.state.active === 2 ? activeTab : tabs} > 
                        <Link to="jobs" spy={true} smooth={true} offset={0} duration={500}> EXPERIENCE </Link>
                        </button>
                    </li>
                    <li className={navbarItem}>
                        <button className={this.state.active === 3 ? activeTab : tabs} > 
                        <Link to="projects" spy={true} smooth={true} offset={0} duration={500}> PROJECTS </Link>
                        </button>
                    </li>
                    <li className={navbarItem}>
                        <button className={this.state.active === 4 ? activeTab : tabs}> 
                        <Link to="gallery" spy={true} smooth={true} offset={0} duration={500}> GALLERY </Link>
                        </button>
                    </li>
                    <li className={navbarItem}>
                        <button className={this.state.active === 5 ? activeTab : tabs}> 
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}> CONTACT </Link>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
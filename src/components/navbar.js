import { paperClasses } from '@mui/material';
import { graphql} from 'gatsby'
import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { navbarContainer, navbarList, tabs, activeTab} from '../styles/navbar.module.css'
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
        this.sectionScrolls = [];
        console.log(this.sectionScrolls);

        // Array.prototype.forEach.call(sectElements, function(elem) {
        //     // this.sectionScrolls.push(elem.scrollHeight);
        //     console.log(elem.scrollHeight);
        // });

        // console.log(this.sectionScrolls);
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
    };
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll(){
        const winScroll = document.documentElement.scrollTop;
        const height = window.innerHeight;

        console.log(winScroll);

        var tr = -30*(winScroll/height)+25
        var navbarOpacity = 1/(1+Math.pow(Math.E, tr))
        this.setState({
            opacity: navbarOpacity
        });
    }

    handleClick(btnNum){
        this.setState({ 
            active: btnNum
        });
        console.log(btnNum);
    }

    render(){
        return(
            //implement code that obstructs the entire tab if it is on the hero page, so invisible buttons arent pressed
            <div className={navbarContainer} style={{"opacity": `${this.state.opacity}`}}>
                <ul className={navbarList}>
                    <li onClick={() => this.handleClick(1)}>
                        <button className={this.state.active === 1 ? activeTab : tabs} > 
                        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}> About </Link>
                        </button>
                    </li>
                    <li onClick={() => this.handleClick(2)}>
                        <button className={this.state.active === 2 ? activeTab : tabs} > 
                        <Link to="jobs" spy={true} smooth={true} offset={-80} duration={500}> Experience </Link>
                        </button>
                    </li>
                    <li onClick={() => this.handleClick(3)}>
                        <button className={this.state.active === 3 ? activeTab : tabs} > 
                        <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}> Projects </Link>
                        </button>
                    </li>
                    <li onClick={() => this.handleClick(4)}>
                        <button className={this.state.active === 4 ? activeTab : tabs}> 
                        <Link to="gallery" spy={true} smooth={true} offset={-80} duration={500}> Gallery </Link>
                        </button>
                    </li>
                    <li onClick={() => this.handleClick(5)}>
                        <button className={this.state.active === 5 ? activeTab : tabs}> 
                        <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}> Contact </Link>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
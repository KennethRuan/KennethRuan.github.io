import { graphql, Link} from 'gatsby'
import React, { Component } from 'react'
import { headerContainer, headerMenu, headerItem, headerLogo } from '../styles/header.module.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            translate: 0,
            opacity: 0,
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
        // window.addEventListener('resize', this.handleResize.bind(this));
    };
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleResize(){
        this.setState({
            innerHeight: document.getElementById('hero').offsetHeight
        });
    }

    handleScroll(){
        var winScroll = document.documentElement.scrollTop;
        var height = window.innerHeight;
        var headerOpacity = winScroll/(height+80);

        this.setState({
            opacity: headerOpacity
        });
    }

    render() {
        return (
            <>
                <div className={headerContainer}>
                    <div className={headerMenu}>
                        <li className={headerItem}>
                            <p style={{"opacity": `${this.state.opacity}`}}> RESUME </p>
                        </li>
                    </div>
                    <Link to="/" className={headerLogo} style={{"opacity": `${this.state.opacity}`}}>
                        RUAN
                    </Link>
                </div>
            </>
        );
    }
};

export default Header;
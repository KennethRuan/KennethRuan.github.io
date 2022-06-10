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
        this.setState({
            innerHeight: window.innerHeight
        });
    };
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll(){
        const winScroll = document.documentElement.scrollTop;
        const height = window.innerHeight;

        // console.log(winScroll);

        var vertTranslate = Math.max(-winScroll, -height+42);
        var headerOpacity = winScroll/(height+80);

        this.setState({
            translate: vertTranslate,
            opacity: headerOpacity
        });
    }

    render() {
        return (
            <>
                <div className={headerContainer} style={{"position": "relative"}}>
                    <div className={headerMenu}>
                        <li className={headerItem}>
                            <p style={{"opacity": `${this.state.opacity}`}}> RESUME </p>
                        </li>
                    </div>
                    <Link to="/" className={headerLogo} style={{"opacity": `${this.state.opacity}`}}>
                        RUAN
                    </Link>
                </div>
                <div className={headerContainer} style={{"position": "fixed", "display":this.state.translate > -this.state.innerHeight+42 ? "none" : "flex"}}>
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
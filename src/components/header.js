import { graphql, Link} from 'gatsby'
import React, { Component } from 'react'
import { headerContainer, spacer, headerMenu, headerItem, headerLogo } from '../styles/header.module.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            transform: 0,
            opacity: 0
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    };
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    handleScroll(){
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = window.innerHeight;

        var vertTranslate = Math.max(-winScroll, -height+80);
        var headerOpacity = winScroll/(height+80);

        this.setState({
            translate: vertTranslate,
            opacity: headerOpacity
        });
    }

    render() {
        return (
            <div className={headerContainer} style={{"transform":`translate(0, ${this.state.translate}px)`}}>
                <div className={headerMenu}>
                    <li className={headerItem}>
                        <p style={{"opacity": `${this.state.opacity}`}}> RESUME </p>
                    </li>
                    <li className={spacer}/>
                </div>
                <Link to="/" className={headerLogo} style={{"opacity": `${this.state.opacity}`}}>
                    RUAN
                </Link>
            </div>
        );
    }
};

export default Header;
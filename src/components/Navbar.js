import React, { Component } from "react";
import Logo from "./Logo.js";
import styled from 'styled-components';

const NavBar = styled.nav`
background: black;
width: 100%;
height: auto;
padding: 15px 25px 15px 25px;
`;

const NavLink = styled.a`
color: white;
font-size: 18px;
font-weight: bold;
border-bottom: solid black;
border-width: 2px; 

:hover {
    color: #001eff;
    border-bottom: solid white;
    border-width: 2px; 
}
`;

const NavUl = styled.ul`
color: #001eff;
`;

const LogoLink = styled.a`
transition: 1.5s;
:hover {
    text-decoration: none;
}
`;

class Navbar extends Component {
    render() {
        return (
            <NavBar className="navbar navbar-light" id="top">
                <LogoLink href="#top"><Logo /></LogoLink>
                <NavUl className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#aboutMe">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#skills">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#emailMe">Contact Me</NavLink>
                    </li>
                </NavUl>
            </NavBar>
        )
    }
}

export default Navbar;
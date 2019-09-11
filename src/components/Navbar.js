import React, { Component } from "react";
//import Logo from "./Logo.js";
import styled from 'styled-components';

// const NavDiv = styled.div`
//     color: white;
// `;

const NavLink = styled.a`
color: #001eff;

:hover {
    color: white;
    border-bottom: solid #001eff;
    border-width: 2px; 
}
`;

const NavUl = styled.ul`
color: #001eff;
`;

class Navbar extends Component {
    render() {
        return (
            <div id="top">
                <nav className="navbar navbar-light bg-dark">
                    <a href="#top" className="navbar-brand text-light"><strong>Dante Proto Logo</strong></a>
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
                            <NavLink className="nav-link" href="#emailMe">Email Me</NavLink>
                        </li>
                    </NavUl>
                </nav>

            </div>
        )
    }
}

export default Navbar;
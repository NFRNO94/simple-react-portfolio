import React, { Component } from "react";
// import styled from 'styled-components';

// const NavDiv = styled.div`
//     color: white;
// `;

class Navbar extends Component {
    render() {
        return (
            <div id="top">
                <nav className="navbar navbar-light bg-dark">
                    <a href="#top" className="navbar-brand ">Dante Proto Logo</a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutMe">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#emailMe">Email Me</a>
                        </li>
                        
                    </ul>
                </nav>

            </div>
        )
    }
}

export default Navbar;
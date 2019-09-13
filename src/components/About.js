import React, { Component } from "react";
import Img from "../assets/images/editedBw.jpeg"
import styled from 'styled-components';

const TitleImg = styled.img`
width: 100%;
height: 480px;
overflow: hidden;
`;

class About extends Component {
    render() {
        return (
            <TitleImg src={Img} />
        )
    }
}

export default About;

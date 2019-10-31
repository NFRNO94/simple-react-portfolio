import React, { Component } from "react";
import { fadeInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeInRight}`;

const HeadDiv = styled.div`
padding: 325px 50px 325px 50px;
width: 100%;
height: 100%;
color: white;
text-align: center;
font-weight: bolder;
text-shadow: 3px 3px black;

@media(max-width: 768px) {
    padding: 275px 50px 450px 50px;
}

@media(max-width: 576px) {
    padding: 140px 50px 175px 50px;
  }
`;

const StatementHead = styled.h1`
animation: 2s ${fadeInAnimation};
`;

class Statement extends Component {
    render() {
        return (
            <div className="statement">
                <HeadDiv>
                    <StatementHead>Hello, my name is Dante! I am a Full Stack Web Developer living in Queen Creek, AZ.</StatementHead>
                </HeadDiv>
            </div>
        )
    }
}

export default Statement;
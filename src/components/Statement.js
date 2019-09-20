import React, { Component } from "react";
import styled from 'styled-components';

const HeadDiv = styled.div`
padding: 325px 50px 325px 50px;
width: 100%;
height: 100%;
color: white;
text-align: center;
font-weight: bolder;
text-shadow: 3px 3px black;
`;

class Statement extends Component {
    render() {
        return (
            <div className="statement">
                <HeadDiv>
                    <h1>Hello, my name is Dante! I am a Full Stack Web Developer living in Queen Creek, AZ.</h1>
                </HeadDiv>
            </div>
        )
    }
}

export default Statement;
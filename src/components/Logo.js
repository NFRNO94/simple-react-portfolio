import React, { Component } from "react";
import { rotateOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`${rotateOut}`;

const ContainLogo = styled.div`
    color: white;
    height: auto;
    width: auto;
    border: solid 5px white;
    border-radius: 5px;
    display: inline-block;
    
    :hover {
        animation: 2s ${rotateAnimation};
    }
`;

const Letters = styled.h5`
padding: 10px;
margin: 0px;
text-decoration: none;
font-weight: bolder;
font-size: 20px;
font-family: 'Kanit', sans-serif;

:hover {
    text-decoration: none;
}
`;

const LogoLink = styled.a`
margin: 0px;
padding: 0px;
text-decoration: none;
color: white;
font-weight: bolder;

:hover {
    color: white;
    text-decoration: none;
}
`;

class Logo extends Component {
    render() {
        return (
            <ContainLogo>
                <LogoLink href="#top">
                    <Letters>DP</Letters>
                </LogoLink>
            </ContainLogo>
        )
    }
}

export default Logo;
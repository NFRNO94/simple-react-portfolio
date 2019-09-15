import React, { Component } from "react";
import styled from 'styled-components';

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

// const styles = css`
//   animation: ${rotate} 2s linear infinite;
// `

const ContainLogo = styled.div`
    color: white;
    height: auto;
    width: auto;
    border: solid 5px white;
    border-radius: 5px;
    display: inline-block;
`;

const Letters = styled.h5`
padding: 12px;
margin: 0px;
text-decoration: none;
font-weight: bolder;

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
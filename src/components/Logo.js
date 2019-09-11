import React, { Component } from "react";
import styled from 'styled-components';

const ContainLogo = styled.div`
    color: white;
    border: solid 5px white;
`;

const Letters = styled.h2`
padding: 15px 20px 15px 20px;
text-decoration: none;
font-weight: bold;

:hover {
    text-decoration: none;
}
`;

class Logo extends Component {
    render() {
        return (
            <ContainLogo>
                <Letters>DP</Letters>
            </ContainLogo>
        )
    }
}

export default Logo;
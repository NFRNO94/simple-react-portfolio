import React, { Component } from "react";
import styled from 'styled-components';

const ContainLogo = styled.div`
    color: white;
    border: solid white;
`;

class Logo extends Component {
    render() {
        return (
            <ContainLogo />
        )
    }
}

export default Logo;
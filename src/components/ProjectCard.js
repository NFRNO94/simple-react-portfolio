import React from "react";
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

const Card = styled.div`
padding: 5px;
margin-bottom: 25px;
text-decoration: none;
color: white;
position: relative;

:hover {
    text-decoration: none;
    color: white;
}
`;

const CardImg = styled.img`
display: block;
width: 100%;
height: 300px;

:hover {
    background-color: black;
    opacity: 0.15;
    color: white;
}

@media(max-width: 576px) {
    height: 175px;
}
`;

const CardTitle = styled.h3`
@media(max-width: 576px) {
    font-size: 22px;
}
`;

const Desc = styled.div`
position: absolute;
bottom: 0;
height: 100%;
width: 100%;
opacity: 0;
transition: .5s ease;
background-color: black;

:hover {
    opacity: .9;
}
`;

const DescText = styled.p`
font-size: 22px;
color: white;
`;

const ProLink = styled.a`
text-decoration: none;
color: #001eff;

:hover {
    text-decoration: none;
    color: white;
}
`;

function ProjectCard(props) {
    return (
        <div className="project">
            <ProLink href={props.url}>
                <Card>
                    <Desc className="d-flex align-items-center justify-content-center text-center">
                        <DescText>{props.description}</DescText>
                    </Desc>
                    <CardImg src={props.image} alt={props.name} />
                    <CardTitle>{props.name}</CardTitle>
                </Card>
            </ProLink>
        </div>
    )
}

export default ProjectCard;
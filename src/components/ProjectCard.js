import React from "react";
import styled, { keyframes } from 'styled-components';

const Card = styled.div`
border: 3.5px solid black;
border-radius: 5px;
padding: 1px;
margin-bottom: 25px;
text-decoration: none;
color: white;

:hover {
    text-decoration: none;
    border: 3.5px solid #ccc;
    border-radius: 5px;
    color: #001eff;
}
`;

const CardImg = styled.img`
:hover {
    background-color: black;
    opacity: 0.15;
    color: white;
}
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
                    <CardImg src={props.image} alt={props.name} width="100%" height="300" />
                    <div className="desc">
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                    </div>
                </Card>
            </ProLink>
        </div>
    )
}

export default ProjectCard;
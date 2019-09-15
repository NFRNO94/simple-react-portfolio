import React from "react";
import styled from 'styled-components';

const Card = styled.div`
border: 1.5px solid #ccc;
padding: 1px;
margin-bottom: 15px;
text-decoration: none;

:hover {
    color: white;
    text-decoration: none;
}
`;

function ProjectCard(props) {
    return (
        <div className="project">
            <a href={props.url}>
            <Card>
                <img src={props.image} alt={props.name} width="100%" height="400" />
                <div className="desc">
                    <strong>{props.name}</strong>
                    <p>{props.description}</p>
                </div>
            </Card>
            </a>
        </div>
    )
}

export default ProjectCard;
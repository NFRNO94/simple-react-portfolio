import React, { Component } from "react";
// import Wrapper from "./Wrapper.js";
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

const List = styled.ul`
margin: 0px 25px 0px 25px;
padding: 5px;
height: 350px;
display: flex;
flex-direction: column;
flex-wrap: wrap;

@media(max-width: 768px) {
    height: 375px;
    padding: 0px;
  }

@media(max-width: 576px) {
    height: 525px;
    padding: 0px;
}

`;

const ListItem = styled.li`
    margin: 10px 25px 10px 25px;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    display: block;
    text-align: left;

    @media(max-width: 768px) {
        margin: 5px 15px 5px 15px;
        padding: 5px;
        font-size: 15px;
    }

    @media(max-width: 576px) {
        margin: 5px 10px 5px 10px;
        padding: 3px;
        font-size: 12px;
    }

    :hover {
        background: #001eff;
        border-radius: 5px;
    }
`;

class SkillsList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <List>
                        <ListItem>React.js</ListItem>
                        <ListItem>Styled Components</ListItem>
                        <ListItem>React-animations</ListItem>
                        <ListItem>Handlebars</ListItem>
                        <ListItem>MERN Stack</ListItem>
                        <ListItem>CSS/Bootstrap</ListItem>
                        <ListItem>HTML</ListItem>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>JQuery</ListItem>
                        <ListItem>API’s</ListItem>
                        <ListItem>Ajax</ListItem>
                        <ListItem>Moment.js</ListItem>
                        <ListItem>Node.js</ListItem>
                        <ListItem>Express</ListItem>
                        <ListItem>MySQL</ListItem>
                        <ListItem>Sequelize</ListItem>
                        <ListItem>MongoDB</ListItem>
                        <ListItem>Mongoose </ListItem>
                        <ListItem>Firebase</ListItem>
                        <ListItem>User Authentication</ListItem>
                        <ListItem>Heroku Deployment</ListItem>
                        <ListItem>GitHub Pages</ListItem>
                        <ListItem>Responsive Design</ListItem>
                        <ListItem>Git</ListItem>
                    </List>
                </div>
            </div>
        )
    }
}

export default SkillsList;
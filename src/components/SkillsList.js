import React, { Component } from "react";
// import Wrapper from "./Wrapper.js";
import styled, { keyframes } from 'styled-components';

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
    height: 550px;
    padding: 10px;
}
`;

const ListItem = styled.li`
    margin: 10px 25px 10px 25px;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;

    @media(max-width: 768px) {
        margin: 5px 15px 5px 15px;
        padding: 5px;
        font-size: 15px;
    }

    @media(max-width: 576px) {
        margin: 5px 15px 5px 30px;
        padding: 5px;
        font-size: 16px;
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
                        <ListItem>Sequelize</ListItem>
                        <ListItem>MERN Stack</ListItem>
                        <ListItem>Moment.js</ListItem>
                        <ListItem>User Authentication</ListItem>
                        <ListItem>Node.js</ListItem>
                        <ListItem>Express</ListItem>                
                        <ListItem>React-animations</ListItem>
                        <ListItem>Heroku Deployment</ListItem>
                        <ListItem>MySQL</ListItem>
                        <ListItem>Firebase</ListItem>
                        <ListItem>MongoDB</ListItem>
                        <ListItem>Mongoose </ListItem>
                        <ListItem>API’s</ListItem>
                        <ListItem>Ajax</ListItem>
                        <ListItem>GitHub Pages</ListItem>
                        <ListItem>Responsive Design</ListItem>
                        <ListItem>GitHub</ListItem>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>JQuery</ListItem>
                        <ListItem>CSS/Bootstrap</ListItem>
                        <ListItem>HTML</ListItem>
                        <ListItem>Handlebars</ListItem>
                    </List>
                </div>
            </div>
        )
    }
}

export default SkillsList;
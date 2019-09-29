import React, { Component } from "react";
// import Wrapper from "./Wrapper.js";
import styled, { keyframes } from 'styled-components';

const List = styled.ul`
margin: 0px 25px 0px 25px;
padding: 5px;
`;

const ListItem = styled.li`
    margin: 10px 25px 10px 25px;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;

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
                    <div className="col">
                        <List>
                            <ListItem>React.js</ListItem>
                            <ListItem>Styled Components</ListItem>
                            <ListItem>Sequelize</ListItem>
                            <ListItem>MERN Stack</ListItem>
                            <ListItem>Moment.js</ListItem>
                            <ListItem>User Authentication</ListItem>
                            <ListItem>Node.js</ListItem>
                            <ListItem>Express</ListItem>
                        </List>
                    </div>

                    <div className="col">
                        <List>
                            <ListItem>Handlebars</ListItem>
                            <ListItem>Heroku Deployment</ListItem>
                            <ListItem>MySQL</ListItem>
                            <ListItem>Firebase</ListItem>
                            <ListItem>MongoDB</ListItem>
                            <ListItem>Mongoose </ListItem>
                            <ListItem>API’s</ListItem>
                            <ListItem>Ajax</ListItem>
                        </List>
                    </div>

                    <div className="col">
                        <List>
                            <ListItem>GitHub Pages</ListItem>
                            <ListItem>Responsive Design</ListItem>
                            <ListItem>GitHub</ListItem>
                            <ListItem>JavaScript</ListItem>
                            <ListItem>JQuery</ListItem>
                            <ListItem>CSS/Bootstrap</ListItem>
                            <ListItem>HTML</ListItem>
                        </List>
                    </div>

                </div>
            </div>

        )
    }
}

export default SkillsList;
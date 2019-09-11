import React, { Component } from "react";
// import Wrapper from "./Wrapper.js";
import styled from 'styled-components'

const Skills = styled.div`
    color: white;
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
            <Skills>
                {/* <Wrapper> */}
                <ul className="d-flex flex-wrap">
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">React.js</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Styled Components</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Sequelize</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">MERN Stack</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Moment.js</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">User Authentication</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Node.js</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Express</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Handlebars</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Heroku Deployment</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">MySQL</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Firebase</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">MongoDB</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Mongoose </ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">API’s</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Ajax</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">GitHub Pages</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">Responsive Design</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">GitHub</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">JavaScript</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">JQuery</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">CSS/Bootstrap</ListItem>
                    <ListItem className="d-inline-flex justify-content-around align-items-center p-2 bd-highlight">HTML</ListItem>
                </ul>
                {/* </Wrapper> */}
            </Skills>
        )
    }
}

export default SkillsList;
import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';
import Wrapper from "../src/components/Wrapper.js";
import Wrapper2 from "../src/components/Wrapper2.js";
import Navbar from "../src/components/Navbar.js";
import About from "../src/components/About.js";
import SkillsList from "../src/components/SkillsList.js";
import ProjectCard from "../src/components/ProjectCard.js";
import Contact from "../src/components/Contact.js";
import Statement from "../src/components/Statement.js";
import Img from "../src/assets/images/landBack.png";
import styled from 'styled-components';

const AppStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    color: white;
    scroll-behavior: smooth;
    background-image: url(${Img});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

const Heading = styled.h2`
color: #001eff;
font-style: italic;
margin-bottom: 25px;
padding-top: 50px;
`;

const BodyDiv = styled.div`
padding: 15px 25px 0px 25px;
margin: 0px 50px 50px 50px;
background: black;
border-radius: 20px;
box-shadow: 8px 5px #0a0a0a;
`;

const Line = styled.hr`
color: white;
background: white;
margin: 50px;
padding: 0px 20px 0px 20px;
`;

const ToTop = styled.a`
background: black;
color: #001eff;
border: none;
font-size: 16px;

:hover {
  color: white;
  cursor: pointer;
  text-decoration: none;
}
`;

const data = [
  {
    "id": 1,
    "name": "MCU Click Game",
    "description": "A random clicking game built in React.js",
    "image": require("../src/assets/images/mcuClickPic.png"),
    "url": "https://mcu-clicky-game.herokuapp.com"
  },
  {
    "id": 2,
    "name": "Friend Finder",
    "description": "Take the survey to find your most compatible friend! Built with Bootsrap, and Express",
    "image": require("../src/assets/images/friendFinder.png"),
    "url": "https://salty-inlet-84276.herokuapp.com/"
  },
  {
    "id": 3,
    "name": "The Hookah Lounge & Bar (In progress)",
    "description": "An app created to place table orders, make reservations, and manage inventory of a Hookah Lounge using Handlebars, JavaScript and SQL.",
    "image": require("../src/assets/images/hookahLounge.png"),
    "url": "https://group-project2.herokuapp.com/"
  },
  {
    "id": 4,
    "name": "Eat-Da-Burgers!!! (In progress)",
    "description": "A Full Stack Application built with Handlebars and MYSQL. User's can devour a burger off the menu, and add devoured burgers back to the menu. The user also has the ability to add a new burger!",
    "image": require("../src/assets/images/eatDaBurgers.png"),
    "url": "https://warm-taiga-59396.herokuapp.com/"
  },
  // {
  //   "id": 5,
  //   "name": "Submerge",
  //   "description": "Subscription manager meets Entertainment Hub! Full Stack React App with Mongoose.",
  //   "image": require("../src/assets/images/mcuClickPic.png"),
  //   "url": "..."
  // }
]

class App extends Component {
  state = {
    data
  };

  render() {
    return (
      <React.Fragment>
        <AppStyle />
        <Navbar />
        <Wrapper2>

          <br></br>

          <Wrapper2>
            <Statement />
          </Wrapper2>

          <BodyDiv id="aboutMe">
            <br></br>
            <br></br>

            <Wrapper>
              <Heading>About Me</Heading>
              <About />
            </Wrapper>

            <Line id="skills" />

            <Wrapper>
              <Heading>Skills</Heading>
              <SkillsList />
            </Wrapper>

            <Line id="projects" />

            <Wrapper>
              <Heading>Projects</Heading>
              <br></br>
              {this.state.data.map(project => (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  url={project.url}
                  image={project.image}
                />
              ))}
            </Wrapper>

            <Line id="emailMe" />

            <Wrapper>
              <Contact />
            </Wrapper>

            <br></br>
            <br></br>

            <Wrapper>
              <div className="row text-center">
                <div className="col">
                  <ToTop href="#top">Back to top with arrow</ToTop>
                </div>
              </div>
            </Wrapper>

            <br></br>

          </BodyDiv>
        </Wrapper2>
      </React.Fragment>
    );
  }
}

export default App;

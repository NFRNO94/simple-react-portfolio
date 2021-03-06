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
// import { fadeIn, rotateOut } from 'react-animations';
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

const AppStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    color: white;
    scroll-behavior: smooth;
    background-image: url(${Img});
    background-size: cover;
    background-color: #001eff;
    background-attachment: fixed;
    background-repeat: no-repeat;
    font-family: 'Roboto', sans-serif;

    @media(max-width: 768px) {
      background-size: 100% 100%;
    }

    @media(max-width: 576px) {
      background-size: 100% 100%;
      background-color: #001eff;
      background-image: none;
    }
`;

// const fadeInAnimation = keyframes`${fadeIn}`;
// const rotateAnimation = keyframes`${rotateOut}`;

const Heading = styled.h2`
color: #001eff;
font-style: italic;
font-weight: bold;
margin-bottom: 25px;
font-family: 'Mukta', sans-serif;
`;

const PosSpan = styled.span`
opacity: 0;
padding: 40px;
`;

const BodyDiv = styled.div`
padding: 15px 25px 0px 25px;
margin: 0px 50px 50px 50px;
background: black;
border-radius: 20px;
box-shadow: 8px 4px rgb(0, 0, 0, 0.75);

@media(max-width: 768px) {
  margin: 0px 25px 0px 25px;
}

@media(max-width: 576px) {
  margin: 0px;
  padding: 15px 25px 0px 25px;
  box-shadow: none;
}
`;

const Line = styled.hr`
color: white;
background: white;
margin: 50px;
padding: 0px 20px 0px 20px;

@media(max-width: 576px) {
  margin: 20px;
}
`;

const ToTop = styled.a`
background: black;
color: #001eff;
border: none;
font-size: 18px;

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

          <BodyDiv>
            <PosSpan id="aboutMe"></PosSpan>
            <br></br>
            <br></br>

            <Wrapper>
              <Heading>About Me</Heading>
              <About />
            </Wrapper>

            <Line />
            <PosSpan id="skills"></PosSpan>
            <br></br>
            <br></br>

            <Wrapper>
              <Heading>Skills</Heading>
              <SkillsList />
            </Wrapper>

            <Line />
            <PosSpan id="projects"></PosSpan>
            <br></br>
            <br></br>

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

            <Line />
            <PosSpan id="emailMe"></PosSpan>
            <br></br>
            <br></br>

            <Wrapper>
              <Heading>Contact Me</Heading>
              <Contact />
            </Wrapper>

            <br></br>
            <br></br>

            <Wrapper>
              <div className="row text-center">
                <div className="col">
                  <ToTop href="#top">Back to top <i className="fa fa-long-arrow-up"></i></ToTop>
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

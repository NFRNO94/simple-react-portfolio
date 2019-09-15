import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';
import Wrapper from "../src/components/Wrapper.js";
import Wrapper2 from "../src/components/Wrapper2.js";
import Navbar from "../src/components/Navbar.js";
import About from "../src/components/About.js";
import SkillsList from "../src/components/SkillsList.js";
import ProjectCard from "../src/components/ProjectCard.js";
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

const HeadDiv = styled.div`
padding: 325px 50px 325px 50px;
width: 100%;
height: 100%;
color: white;
text-align: center;
font-weight: bolder;
text-shadow: 3px 3px black;
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

const EmailBtn = styled.button`
background: #001eff;
color: white;
width: 100%;
padding: 15px 20px 15px 20px;
border-radius: 10px;

:hover {
  background: white;
  color: #001eff;
  border: solid 1px #001eff;
}
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
    "name": "The Hookah Lounge & Bar",
    "description": "An app created to place table orders, make reservations, and manage inventory of a Hookah Lounge using Handlebars, JavaScript and SQL",
    "image": require("../src/assets/images/mcuClickPic.png"),
    "url": "..."
  },
  {
    "id": 3,
    "name": "Submerge",
    "description": "Subscription manager meets Entertainment Hub! Full Stack React App with Mongoose.",
    "image": require("../src/assets/images/mcuClickPic.png"),
    "url": "..."
  }
]

class App extends Component {
  state = {
    data
  };

  formatImageUrl(url) {
    const width = '400'
    const height = '400'

    return url.replace('{width}', width).replace('{height}', height)
  };

  render() {
    return (
      <React.Fragment>
        <AppStyle />
        <Navbar />
        <Wrapper2>
          <br></br>
          <Wrapper2>
            <div className="statement">
              <HeadDiv>
                <h1>Hello, my name is Dante! I am a Full Stack Web Developer living in Queen Creek, AZ.</h1>
              </HeadDiv>
            </div>
          </Wrapper2>
          <BodyDiv id="aboutMe">
            <br></br>
            <br></br>

            <Wrapper>
              <Heading>About Me</Heading>
              <About />
              <br></br>
              <br></br>
              <p>klhfglqh rguhwerljknwrehvlntkwerghnklwe hrnlghnvwelkrgnvlkjwehrgkj vhwnejkrngkwer kjgcnkjgrkjnrkjcghm wkjnjwerkjgnqe rhgiwehrghwrgkha fgkjfhgchuhfinugrgoe hrwmicghqreicghqiurchmqgoin ucgoqhri guqhxrieuxfoiqu rcguqnruriugqr uhqoiruhfiq ourhgioqrhgiuoqhrbs djhfbkjahsdhfqyw4groiu whoy  ewbo  egwryoug  weuifh  weyfg wegfyewhfyewr gywehriuehwiru iw if qw fq qhyor gqyreg yqer ggo qerg qer aiuehnreghveqrighiqerh ngiqergqergq ergvqeriughqeriogh oiurhgiuero giuqhneroiugvqve iorugvoiquergoiuq eroiguyqeroiug yqiuoerygiouqe rygoiuqeyriougvyqe iroyvgiuqerycgiuqeyerciogy qergyoiuqcrioguyqeriogcyi ouqreybgioqerio ugycqierbgiuoqer oigcqeiourgnciouqer giouqyebriougybqei
              orugybioeryiy</p>
              <p>klhfglqhrguhwer ljknwrehvlntkwerg hnklwehrnlghnvwe lkrgnvlkjwehrgkjvhwn ejkrngkwer kjgcnkjgrkjnrk jcghmwkjnjwerk jgnqerhgiwehrghwrgkha fgkjfhgchuhfin ugrgoehrwmicghqreicghq iurchmqgoinucgoqhri guqhxrieuxfoiq urcguqnruriugqruhq oiruhfiq ourhgioqrhgiuoq hrbsdjhfbkjahsd hfqyw4groiu whoy  ewbo  egwryoug  weuifh  weyfg wegfyewhfyewr gywehriuehwiru iw if qw fq qhyor gqyreg yqer ggo qerg qer aiuehnreghveqrighiqerh ngiqergqergqergvq eriughqerioghoiu rhgiuerogiuqhneroiugvqve iorugvoiquergoiuqe roiguyqeroiugyqi uoerygiouqeryg oiuqeyriougvyqe iroyvgiuqerycgi uqeyerciogyqergyoiuq crioguyqeriogcyiouqr eybgioqeriougyc qierbgiuoqer oigcqeiourgnciouqergiouq yebriougybqei
              orugybioeryiy</p>
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
              <div className="text-center justify-content-center">
                <Heading>Would you like to work with me?</Heading>
                <EmailBtn type="button" className="btn btn-lg btn-block"><h3>Send me and email!</h3></EmailBtn>
                <br></br>
                <br></br>

                <Heading id="followMe">Follow Me!</Heading>
                <button>GitHub</button>
                <button>Twitter</button>
                <button>Heroku</button>
                <button>Facebook</button>
                <button>Instagram</button>
                <button>LinkedIn</button>
              </div>
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

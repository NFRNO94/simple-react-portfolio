import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';
import Wrapper from "../src/components/Wrapper.js";
import Wrapper2 from "../src/components/Wrapper2.js";
import Navbar from "../src/components/Navbar.js";
import About from "../src/components/About.js";
import SkillsList from "../src/components/SkillsList.js";
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
  border: solid .5px #001eff;
}
`;

class App extends Component {
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
          <span id="aboutMe"></span>
          <BodyDiv>
            <br></br>
            <br></br>

            <Wrapper>
              <Heading>About Me</Heading>
              <About />
              <br></br>
              <br></br>
              <p>klhfglqhrguhwerljknwrehvlntkwerghnklwehrnlghnvwelkrgnvlkjwehrgkjvhwnejkrngkwer kjgcnkjgrkjnrkjcghmwkjnjwerkjgnqerhgiwehrghwrgkha fgkjfhgchuhfinugrgoehrwmicghqreicghqiurchmqgoinucgoqhri guqhxrieuxfoiqurcguqnruriugqruhqoiruhfiq ourhgioqrhgiuoqhrbsdjhfbkjahsdhfqyw4groiu whoy  ewbo  egwryoug  weuifh  weyfg wegfyewhfyewrgywehriuehwiru iw if qw fq qhyor gqyreg yqer ggo qerg qer aiuehnreghveqrighiqerh ngiqergqergqergvqeriughqerioghoiurhgiuerogiuqhneroiugvqve iorugvoiquergoiuqeroiguyqeroiugyqiuoerygiouqerygoiuqeyriougvyqe iroyvgiuqerycgiuqeyerciogyqergyoiuqcrioguyqeriogcyiouqreybgioqeriougycqierbgiuoqer oigcqeiourgnciouqergiouqyebriougybqei
              orugybioeryiy</p>
              <p>klhfglqhrguhwerljknwrehvlntkwerghnklwehrnlghnvwelkrgnvlkjwehrgkjvhwnejkrngkwer kjgcnkjgrkjnrkjcghmwkjnjwerkjgnqerhgiwehrghwrgkha fgkjfhgchuhfinugrgoehrwmicghqreicghqiurchmqgoinucgoqhri guqhxrieuxfoiqurcguqnruriugqruhqoiruhfiq ourhgioqrhgiuoqhrbsdjhfbkjahsdhfqyw4groiu whoy  ewbo  egwryoug  weuifh  weyfg wegfyewhfyewrgywehriuehwiru iw if qw fq qhyor gqyreg yqer ggo qerg qer aiuehnreghveqrighiqerh ngiqergqergqergvqeriughqerioghoiurhgiuerogiuqhneroiugvqve iorugvoiquergoiuqeroiguyqeroiugyqiuoerygiouqerygoiuqeyriougvyqe iroyvgiuqerycgiuqeyerciogyqergyoiuqcrioguyqeriogcyiouqreybgioqeriougycqierbgiuoqer oigcqeiourgnciouqergiouqyebriougybqei
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
              <p>Porject cards will be displayed here.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
            </Wrapper>

            <Line id="emailMe" />

            <Wrapper>
              <div className="text-center justify-content-center">
                <Heading>Would you like to work with me?</Heading>
                <EmailBtn type="button" class="btn btn-lg btn-block"><h3>Send me and email!</h3></EmailBtn>
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

            <Wrapper>
              <button>Back to top with arrow</button>
            </Wrapper>

            <br></br>

          </BodyDiv>

        </Wrapper2>

      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';
import Wrapper from "../src/components/Wrapper.js";
import Wrapper2 from "../src/components/Wrapper2.js";
import Navbar from "../src/components/Navbar.js";
import SkillsList from "../src/components/SkillsList.js";
import Img from "../src/assets/images/landBack.png";
import styled from 'styled-components';

const AppStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    color: white;
    background: url(${Img});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

const HeadDiv = styled.div`
padding: 350px 50px 350px 50px;
width: 100%;
height: 100%;
color: white;
text-align: center;
font-weight: bolder;
text-shadow: 3px 3px black;
`;

const Heading = styled.h3`
color: #001eff;
font-style: italic;
`;

const BodyDiv = styled.div`
padding: 0px 25px 0px 25px;
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

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppStyle />
        {/* Illustrated background image, will purchase */}
        <Wrapper2>
          <Navbar />
          <br></br>
          {/* <div className="row mt-3">
            <Logo>Logo</Logo>
            <Nav>navbar will be here</Nav>
            <br></br>
            <br></br>
          </div> */}


          <Wrapper2>
            <div className="statement">
              <HeadDiv>
                <h1>Hello, my name is Dante! I am a Full Stack Web Developer living in Queen Creek, AZ.</h1>
              </HeadDiv>
            </div>
          </Wrapper2>
          <BodyDiv>

            <br></br>
            <br></br>

            <Wrapper>
              <Heading id="aboutMe">About Me</Heading>
              <p>an image of me will be here</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <br></br>
              <br></br>
              <p>klhfglqhrguhwerljknwrehvlntkwerghnklwehrnlghnvwelkrgnvlkjwehrgkjvhwnejkrngkwer kjgcnkjgrkjnrkjcghmwkjnjwerkjgnqerhgiwehrghwrgkha fgkjfhgchuhfinugrgoehrwmicghqreicghqiurchmqgoinucgoqhri guqhxrieuxfoiqurcguqnruriugqruhqoiruhfiq ourhgioqrhgiuoqhrbsdjhfbkjahsdhfqyw4groiu whoy  ewbo  egwryoug  weuifh  weyfg wegfyewhfyewrgywehriuehwiru iw if qw fq qhyor gqyreg yqer ggo qerg qer aiuehnreghveqrighiqerh ngiqergqergqergvqeriughqerioghoiurhgiuerogiuqhneroiugvqve iorugvoiquergoiuqeroiguyqeroiugyqiuoerygiouqerygoiuqeyriougvyqe iroyvgiuqerycgiuqeyerciogyqergyoiuqcrioguyqeriogcyiouqreybgioqeriougycqierbgiuoqer oigcqeiourgnciouqergiouqyebriougybqei
              orugybioeryiy</p>
              <p>klhfglqhrguhwerljknwrehvlntkwerghnklwehrnlghnvwelkrgnvlkjwehrgkjvhwnejkrngkwer kjgcnkjgrkjnrkjcghmwkjnjwerkjgnqerhgiwehrghwrgkha fgkjfhgchuhfinugrgoehrwmicghqreicghqiurchmqgoinucgoqhri guqhxrieuxfoiqurcguqnruriugqruhqoiruhfiq ourhgioqrhgiuoqhrbsdjhfbkjahsdhfqyw4groiu whoy  ewbo  egwryoug  weuifh  weyfg wegfyewhfyewrgywehriuehwiru iw if qw fq qhyor gqyreg yqer ggo qerg qer aiuehnreghveqrighiqerh ngiqergqergqergvqeriughqerioghoiurhgiuerogiuqhneroiugvqve iorugvoiquergoiuqeroiguyqeroiugyqiuoerygiouqerygoiuqeyriougvyqe iroyvgiuqerycgiuqeyerciogyqergyoiuqcrioguyqeriogcyiouqreybgioqeriougycqierbgiuoqer oigcqeiourgnciouqergiouqyebriougybqei
              orugybioeryiy</p>
            </Wrapper>

            <Line />

            <Wrapper>
              <Heading id="skills">Skills</Heading>
              <p>Bulleted list here in table format. Will find nice organized way to do this</p>
              <SkillsList>

              </SkillsList>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
            </Wrapper>

            <Line />

            <Wrapper>
              <Heading id="projects">Projects</Heading>
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

            <Line />

            <Wrapper>
              <Heading id="emailMe">Email me!</Heading>
              <br></br>
              <button>My email link</button>
              <br></br>
              <br></br>
            </Wrapper>

            <br></br>

          </BodyDiv>
          
        </Wrapper2>

      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';
import Wrapper from "../src/components/Wrapper.js";
import Wrapper2 from "../src/components/Wrapper2.js";
import styled from 'styled-components';

const AppStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    color: white;
    background: black;
  }
`;

const Logo = styled.p`
position: left;
padding-right: 850px;
`;

const HeadDiv = styled.div`
background: grey;
padding: 250px 50px 250px 50px;
width: 100%;
color: white;
text-align: center;
`;

const Heading = styled.h3`
color: red;
font-style: italic;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppStyle />
        {/* Illustrated background image, will purchase */}
        <Wrapper2>
          <Wrapper>
            <br></br>
            <br></br>
            <Wrapper>
              <div className="row">
                <Logo>Logo</Logo>
                <p>navbar will be here</p>
              </div>
            </Wrapper>
          </Wrapper>

          <Wrapper2>
            <HeadDiv>
              <h1>Header Name, and About Me Statement will go here</h1>
              <p>illustration image in background</p>
            </HeadDiv>
          </Wrapper2>

          <br></br>
          <br></br>

          <Wrapper>
            <Heading>About Me</Heading>
            <p>an image of me will be here</p>
            <p>klhfglqhrguhwerljknwrehvlntkwerghnklwehrnlghnvwelkrgnvlkjwehrgkjvhwnejkrngkwer kjgcnkjgrkjnrkjcghmwkjnjwerkjgnqerhgiwehrghwrgkha fgkjfhgchuhfinugrgoehrwmicghqreicghqiurchmqgoinucgoqhri guqhxrieuxfoiqurcguqnruriugqruhqoiruhfiq ourhgioqrhgiuoqhrbsdjhfbkjahsdhfqyw4groiu whoy  ewbo  egwryoug  weuifh  weyfg wegfyewhfyewrgywehriuehwiru iw if qw fq qhyor gqyreg yqer ggo qerg qer aiuehnreghveqrighiqerh ngiqergqergqergvqeriughqerioghoiurhgiuerogiuqhneroiugvqve iorugvoiquergoiuqeroiguyqeroiugyqiuoerygiouqerygoiuqeyriougvyqe iroyvgiuqerycgiuqeyerciogyqergyoiuqcrioguyqeriogcyiouqreybgioqeriougycqierbgiuoqer oigcqeiourgnciouqergiouqyebriougybqei
              orugybioeryiy</p>
          </Wrapper>

          <Wrapper>
            <Heading>Skills</Heading>
            <p>Bulleted list here in table format. Will find nice organized way to do this</p>
          </Wrapper>

          <Wrapper>
            <Heading>Email me!</Heading>
            <button>My email link</button>

            <br></br>
            <br></br>
          </Wrapper>

        </Wrapper2>

      </React.Fragment>
    );
  }
}

export default App;

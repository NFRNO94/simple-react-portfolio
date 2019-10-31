import React, { Component } from "react";
import Img from "../assets/images/editedBw.jpeg";
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

const TitleImg = styled.img`
width: 100%;
height: 500px;
overflow: hidden;
border-radius: 5px;

@media(max-width: 768px) {
  height: 250px;
}

@media(max-width: 576px) {
  height: 160px;
}
`;

class About extends Component {
  render() {
    return (
      <div>
        <TitleImg src={Img} />
        <br></br>
        <br></br>
        <p>My name is Dante Proto, and I'm currently a freelance Full Stack Web Developer building my portfolio. I am certified through The University of Arizona Coding Bootcamp in Full Stack Web Development, and I am seeking opportunities to start my career on the Front End.
          My passion is working with React.js. When I am not writing code or improving my skills, I enjoy working out at the gym, hiking, target shooting in the desert, binge watching Netflix/Hulu, and playing the newest Battle Royale
          game on my Xbox or PS4. I am also a die hard Arizona Cardinals fan, and love American Football.
                    </p>
        <p>Some of the <a href="#projects">projects</a> I have worked on include The Hookah Bar & Lounge (a reservation/management application for a Hookah lounge), Submerge (a subscription manager and entertainment hub), and several smaller applications that can be viewed on my
        <a href="https://github.com/NFRNO94">GitHub</a>. If you are looking for a Web Developer, such as myself, I am happy to discuss any potential projects you would like to have me work on. If you are interested in hiring me, feel free to <a href="#emailMe">contact me</a>, and check out my <a href="https://docs.google.com/document/d/1qm79o_XTHDWlZDkP40xtsX9crIUMjQwcwdNUd4sKy20/edit?usp=sharing">resume</a>.
        </p>
      </div>
    )
  }
}

export default About;

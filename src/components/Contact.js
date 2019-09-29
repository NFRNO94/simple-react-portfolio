import React, { Component } from "react";
import ImgF from "../assets/images/iconfinder_facebook_circle_gray_107140.png";
import ImgG from "../assets/images/iconfinder_github_circle_gray_107139.png";
import ImgT from "../assets/images/iconfinder_twitter_circle_gray_107135.png";
import ImgI from "../assets/images/iconfinder_instagram_circle_gray_107138.png";
import ImgL from "../assets/images/iconfinder_linkedin_circle_gray_107149.png";
import styled, { keyframes } from 'styled-components';

const Heading = styled.h2`
color: #001eff;
font-style: italic;
margin-bottom: 25px;
padding-top: 50px;
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

const FollowBtn = styled.img`
width: 60px;
height: 60px;
margin: 5px;
border-bottom: solid black;
border-width: 0px; 
border-radius: 75px;

:hover {
    background-color: #001eff;
    border-width: 0px; 
    border-radius: 75px;
}
`;

const ResumeLink = styled.a`
:hover {
    text-decoration: none;
}
`;
class Contact extends Component {
    render() {
        return (
            <div className="text-center justify-content-center">
                <Heading>Would you like to work with me?</Heading>
                <ResumeLink href="https://docs.google.com/document/d/1qm79o_XTHDWlZDkP40xtsX9crIUMjQwcwdNUd4sKy20/edit?usp=sharing">
                <EmailBtn type="button" className="btn btn-lg btn-block"><h3>View My Resume</h3></EmailBtn>
                </ResumeLink>

                <br></br>

                <Heading id="followMe">Follow Me!</Heading>
                <a href="https://www.facebook.com/dante.proto.7"><FollowBtn src={ImgF} alt="Facebook"></FollowBtn></a>
                <a href="https://github.com/NFRNO94"><FollowBtn src={ImgG} alt="Github"></FollowBtn></a>
                <a href="https://twitter.com/dante_proto"><FollowBtn src={ImgT} alt="Twitter"></FollowBtn></a>
                <a href="https://www.instagram.com/dproto54/?hl=en"><FollowBtn src={ImgI} alt="Instagram"></FollowBtn></a>
                <a href="https://www.linkedin.com/in/dante-proto-905b67178/"><FollowBtn src={ImgL} alt="LinkedIn"></FollowBtn></a>
            </div>
        )
    }
}

export default Contact;
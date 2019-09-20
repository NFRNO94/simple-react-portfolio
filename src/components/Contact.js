import React, { Component } from "react";
import ImgF from "../assets/images/iconfinder_facebook_circle_gray_107140.png";
import ImgG from "../assets/images/iconfinder_github_circle_gray_107139.png";
import ImgT from "../assets/images/iconfinder_twitter_circle_gray_107135.png";
import ImgI from "../assets/images/iconfinder_instagram_circle_gray_107138.png";
import ImgL from "../assets/images/iconfinder_linkedin_circle_gray_107149.png";
import styled from 'styled-components';

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
border-width: 4px; 
border-radius: 6px;

:hover {
    border-bottom: solid #001eff;
    border-width: 4px; 
    border-radius: 6px;
}
`;

class Contact extends Component {
    render() {
        return (
            <div className="text-center justify-content-center">
                <Heading>Would you like to work with me?</Heading>
                <EmailBtn type="button" className="btn btn-lg btn-block"><h3>Send me and email!</h3></EmailBtn>

                <br></br>
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
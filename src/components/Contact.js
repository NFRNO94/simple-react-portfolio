import React, { Component } from "react";
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

class Contact extends Component {
    render() {
        return (
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
        )
    }
}

export default Contact;
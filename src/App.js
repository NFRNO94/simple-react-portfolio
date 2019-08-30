import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

const AppStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    color: white;
    background: black;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppStyle />
        <div>
          <h1>Hello World!!</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

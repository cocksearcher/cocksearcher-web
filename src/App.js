import React from "react";
import styled, { keyframes } from "styled-components";

const Heading = keyframes`
  0% { top: 50em; }
  50% { color: red; }
  100% { top: 3em;}
`;

const HomeDiv = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
`;

const HomeHeader = styled.div`
  h1 {
    font-weight: lighter;
  }
  position: relative;
  top: 0;
  animation: ${Heading};
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

const App = () => (
  <HomeDiv>
    <HomeHeader>
      <h1>Welcome to Freight Mule</h1>
    </HomeHeader>
  </HomeDiv>
);

export default App;

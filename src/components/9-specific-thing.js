// Specificity

import React from 'React';
import styled, { createGlobalStyle } from "styled-components";

const BlueThing = styled.div`
  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
  div${BlueThing} {
    color: red;
  }
`;

export const SpecificThing = () => (<React.Fragment>
  <GlobalStyle />
  <BlueThing>
    I'm blue, da ba dee da ba daa
  </BlueThing>
</React.Fragment>);


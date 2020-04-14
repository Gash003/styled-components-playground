import React from 'React';
import styled, { keyframes } from "styled-components";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;



export const RotatedSquare = styled.div`
  width: 100px;
  height: 100px;
  animation: ${rotate} 3s linear infinite;
  background-color: lime;
`;
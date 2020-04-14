import './3-how-styling-actually-works.css';
import React, { useState } from 'react';
import styled from "styled-components";

const SimpleDiv = ({className}) => (
  <div className={`red-color ${className}`} >I'm Simple Div</div>
)

const StyledSimpleDiv = styled(SimpleDiv)`
  background-color: pink;
`

const SpecificityDiv = styled.div.attrs({
  children: 'Specific Div'
})`
  color: green;
`;

export const WatchOut = () => {
  const [url, setUrl] = useState('https://onet.pl');
  return (<>
     <StyledSimpleDiv />
     <SpecificityDiv className="red-color" />
  </>);
};
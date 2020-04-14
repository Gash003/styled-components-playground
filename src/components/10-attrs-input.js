import React from 'React';
import styled from "styled-components";

const AttrsInput = styled.input.attrs(props => ({
  type: 'password',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

export const AttrsProps = () => (<>
  <AttrsInput small placeholder="Small" />
  <AttrsInput placeholder="Normal" />
  <AttrsInput padding="2em" placeholder="Padded" />
</>);

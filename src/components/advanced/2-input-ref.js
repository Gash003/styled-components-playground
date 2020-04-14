import React, { useRef } from 'react';
import styled from "styled-components";

const RefInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const RefForm = () => {
  const inputRef = useRef();
  return (
    <RefInput
        ref={inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => {
          inputRef.current.focus()
        }}
      />
  );
}



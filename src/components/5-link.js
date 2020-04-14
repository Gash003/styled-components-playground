// Customizing any component
import React from 'React';
import styled from "styled-components";

export const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

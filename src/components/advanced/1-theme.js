import React, { useContext } from 'react';
import styled, { ThemeProvider, ThemeContext, withTheme } from "styled-components";

const ThemedButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

ThemedButton.defaultProps = {
  theme: {
    main: "palevioletred"
  }
};

const theme = {
  main: "mediumseagreen"
};

const extendedTheme = (oldTheme) => ({
  ...oldTheme,
  secondary: 'lime',
});

const overridenTheme = {
  main: "darkorange"
};



const NonStyledThemedCoponent = withTheme(({theme}) => (
  <div>{ JSON.stringify(theme)}</div>
))

const MyContextComponent = () => {
  const themeContext = useContext(ThemeContext);

  return <div>{ JSON.stringify(themeContext)}</div>;
}

export const Theme = () => (<div>
  <ThemedButton>Normal</ThemedButton>
  <ThemeProvider theme={theme}>
    <ThemedButton>Themed</ThemedButton>
    <ThemedButton theme={overridenTheme}>Themed Overrides</ThemedButton>
    <NonStyledThemedCoponent />
    <ThemeProvider theme={extendedTheme}>
      <MyContextComponent />
    </ThemeProvider>
  </ThemeProvider>
</div>);

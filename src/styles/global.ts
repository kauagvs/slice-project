import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --black: #09090c;
    --grey: #a4b2bc;
    --white: #ffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`;

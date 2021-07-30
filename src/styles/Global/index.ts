import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    ${(props) => {
      const theme = props.theme;

      let append = "";

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--primary);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    color: var(--black);
    transition: color 200ms ease-out;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
import theme from '.';

export default createGlobalStyle`

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    font-family: ${theme.fontFamily};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: ${theme.fontFamily};
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 1.6rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
      width: 6px!important;
      height: 6px!important;
  }

  ::-webkit-scrollbar-track {
      background: hsla(0,0%,100%,.1);
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.background.gray}
  }

  button, select {
    cursor: pointer;
    border: 0;
  }

  button, input, select {
    outline: 0;
    background: none;
  }

  html, body, button, input, textarea {
    font-family: 'inter', sans-serif;
    color: ${({ theme }) => theme.text.primary}
  }
`;

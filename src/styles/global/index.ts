import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background.gray};
    height: 100vh;
  }

  button, select, a {
    cursor: pointer;
    border: 0;
  }

  button, input, select {
    outline: 0;
    background: none;
  }

  html, body, button, input, textarea, select {
    font-family: 'inter', sans-serif;
    color: ${({ theme }) => theme.text.primary}
  }
`;

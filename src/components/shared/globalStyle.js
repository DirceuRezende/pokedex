import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #efefef;
    display: flex;
  }

  ol, ul {
  list-style: none;
  }

  *,
  *:after,
  *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
  }
`;

export default GlobalStyle;

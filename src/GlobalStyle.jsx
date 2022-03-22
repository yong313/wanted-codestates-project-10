import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input {
      border: none;
    }
    input:focus {
      outline: none;
    }
`;

export default GlobalStyle;

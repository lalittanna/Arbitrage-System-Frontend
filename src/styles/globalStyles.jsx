import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
      padding: 0;
      margin: 0;
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      transition: all .5s linear;
    }
`;

export const lightTheme = {
  body: "#fefefe",
  text: "#000000",
};

export const darkTheme = {
  body: "#000000",
  text: "#fefefe",
};

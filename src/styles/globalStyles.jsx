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
  body: "#aec0e3",
  text: "#0f1425",
};

export const darkTheme = {
  body: "#0f1425",
  text: "#aec0e3",
};

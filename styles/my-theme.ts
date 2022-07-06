// my-theme.ts
import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  bg: "#181818",
  bgLighter: "#202020",
  text: "white",
  textSoft: "#aaaaaa",
  soft: "#373737"
}

const lightTheme: DefaultTheme = {
  bg: "#f9f9f9",
  bgLighter: "white",
  text: "black",
  textSoft: "#606060",
  soft: "#f5f5f5"
}

export { darkTheme, lightTheme }
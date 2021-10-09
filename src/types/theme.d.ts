import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      gray: string;
      white: string;
    },

    text: {
      primary: string,
      secondary: string,
      white: string
    },

    brandcolor: {
      primary_default: string,
      primary_light: string,
    },

    outline: {
      gray_dark: string,
    },

    danger: {
      main: string;
    }
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      input: {
        label: string;
        active: string;
        locked: string;
      };
      button: {
        text: string;
      };
    };
    text: {
      fontFamily: {
        base: string;
        logo: string;
      };
      size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
      };
      lineHeight: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
      };
    };
  }
}

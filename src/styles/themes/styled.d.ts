import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      font: string;
      fontLight: string;
      background: string;
      backgroundLight: string;
      yellow: string;
      green: string;
      greenLight: string;
      red: string;
      redLight: string;
      blue: string;
      blueLight: string;
    };
  }
}

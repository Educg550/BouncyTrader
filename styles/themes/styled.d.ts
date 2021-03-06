import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      secondaryBackground: string;

      text: string;
      green: string;
      red: string;
      gray: string;
    };
  }
}

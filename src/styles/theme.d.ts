import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      info: string;
      error: string;
      white: string;
      text: string;
      darkOpacity: string;
    };
    header: {
      height: number;
    };
  }
}

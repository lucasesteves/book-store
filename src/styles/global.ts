import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --font-family: 'Roboto', sans-serif;

    font-family: var(--font-family);

    --headline: normal normal 600 32px/36px var(--font-family);

    --headline2: normal normal 600 18px/22px var(--font-family);
    
    --title: normal normal 600 14px/18px var(--font-family);

    --title-light: normal normal 300 14px/18px var(--font-family);
    
    --subtitle: normal normal 300 10px/14px var(--font-family);
    
    --body: normal normal 300 12px/16px var(--font-family);


  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
`;

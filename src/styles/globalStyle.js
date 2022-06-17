import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        font-family: "Nunito", sans-serif;
    }

    html, body, main {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
    }

    button {
        :hover {
            cursor: pointer;
        }
    }

`;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html, body, #root{
    height: 100%;
    font-family: 'Lato', sans-serif;
    background-color:#f6f6f6;
    color: #3e3e3e;
    font-weight: 700;
}

* {
    padding: 0 ;
    margin: 0;
    box-sizing: border-box;
    &:visited { 
        text-decoration: none; 
    }
}

a {
    text-decoration: none;
}
`;

export default GlobalStyles;

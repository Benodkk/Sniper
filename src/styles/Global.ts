import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    width: 100%;
}
body{
background-color: #050B15;
color: white;
font-family: 'Sora', sans-serif;
width: 100%;
/* overflow-x: hidden; */
}
button{
    border: none;
}

ol, ul {
    list-style: none outside none;
}
`;

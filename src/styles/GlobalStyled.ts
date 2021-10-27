import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    body{
        background-color:rgba(130, 61, 139, 0.8);
        color: black;
    }
`;

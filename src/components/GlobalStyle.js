import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    width: 400px;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
};

button {
    margin: 0 10px;
    display: inline-block;
};

button:hover{
    background-color: #999;
    color: #ffcc00;
};

:first-letter{
    text-transform: uppercase;
};

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
};
`
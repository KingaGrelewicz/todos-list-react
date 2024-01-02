import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: #eee;
        font-family: 'Open Sans', sans-serif;
    }
`;
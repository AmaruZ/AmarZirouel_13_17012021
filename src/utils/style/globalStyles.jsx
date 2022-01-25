import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        font-family: Montserrat, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        box-sizing: border-box;
    }
    body {
        margin: 0;

    }
    #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`

export default GlobalStyle

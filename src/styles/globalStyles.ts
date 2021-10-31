import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #FCF8F5 0%, #F9F6EE 100%);
  }
`

export default GlobalStyle

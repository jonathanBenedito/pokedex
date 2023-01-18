import { createGlobalStyle } from "styled-components";
import { Home } from "./pages/home";

function App() {
  return (
    <main>
        <GlobalStyle />
        <Home />
    </main>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Hind Vadodara', sans-serif;
    background: url('/images/light-mode-background.jpg') center center no-repeat;
    min-height: 100vh;
  }
  
  main {
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    background-color: transparent;
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0;
  }
`

export default App;
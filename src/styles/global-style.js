import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../contexts/theme-context"

export const GlobalStyle = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <StyledGlobal {...{theme}} />
    )
}

const StyledGlobal = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color:    ${props => props.theme.scrollbarThumbColor}
                        ${props => props.theme.scrollbarTrackColor};
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scrollbarTrackColor};
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scrollbarThumbColor};
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.scrollbarThumbHoverColor};
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${props => props.theme.scrollbarThumbActiveColor};
  }

  body {
    font-size: 1.6rem;
    font-family: 'Hind Vadodara', sans-serif;
    background: url(${props => props.theme.background}) center center no-repeat;
    background-size: cover;
    min-height: 100vh;
    transition: 0.3s ease;
  }

  img {
    max-width: 100%;
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
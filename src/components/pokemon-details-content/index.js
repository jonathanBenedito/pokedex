import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { deviceBreakpoint } from "../../variables"

export const PokemonDetailsContent = ({children}) => {
    
    const { theme } = useContext(ThemeContext)

    return (
        <Container {...{theme}}>
            {children}      
        </Container>
    )
}

const Container = styled.article`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    color: ${props => props.theme.defaultFontColor};
    width: 100%;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        gap: 15px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

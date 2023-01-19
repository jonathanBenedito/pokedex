import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { FilterDropdown } from "../filter-dropdown"
import { ThemeTogglerButton } from "../theme-toggler-button"

export const Navbar = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Section theme={theme}>
            <div className="buttons-section">
                <FilterDropdown />
                <ThemeTogglerButton />
            </div>
            <Link to='/'>
                <img src="/images/pokedex-logo.png" />
            </Link>   
        </Section>
    )
}

const Section = styled.section`
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.navbarBackgroundColor};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1.3rem 8.5rem;

    a {
        display: flex;
    }

    .buttons-section {
        display: flex;
        gap: 1.6rem;
    }
`
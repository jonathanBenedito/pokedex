import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { FilterDropdown } from "../filter-dropdown"
import { FilterModal } from "../filter-modal"
import { MobileModalFilterButton } from "../mobile-filter-button"
import { ThemeTogglerButton } from "../theme-toggler-button"

export const Navbar = () => {

    const { theme } = useContext(ThemeContext)
    const [showFilterModal, setShowFilterModal] = useState(false)

    return (
        <StyledNavbar theme={theme}>
            <FilterModal {...{showFilterModal}} />
            <Container>
                <div className="buttons-section">
                    <MobileModalFilterButton {...{setShowFilterModal}} />
                    <FilterDropdown />
                    <ThemeTogglerButton />
                </div>
                <Link to='/'>
                    <img src="/images/pokedex-logo.png" />
                </Link>   
            </Container>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    position: absolute;
    top: 0;
    background-color: ${props => props.theme.navbarBackgroundColor};
    width: 100%;
    height: 60px;
    display: flex;  
    padding: 1.3rem 8.5rem;
    justify-content: center;

    a {
        display: flex;
    }

    .buttons-section {
        display: flex;
        gap: 1.6rem;
    }
`

const Container = styled.div`
    {
        display: flex;
        width: 100%;
        max-width: 1240px;
        justify-content: space-between;
    }
`
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { deviceBreakpoint } from "../../variables"
import { BackButton } from "../back-button"
import { FilterDropdown } from "../filter-dropdown"
import { FilterModal } from "../filter-modal"
import { MobileModalFilterButton } from "../mobile-filter-button"
import { ThemeTogglerButton } from "../theme-toggler-button"

export const Navbar = () => {

    const { theme } = useContext(ThemeContext)

    const [showFilterModal, setShowFilterModal] = useState(false)
    const [filterTypeTheme, setFilterTypeTheme] = useState({
        name: 'all',
        color: 'white',
        icon: '/images/filter-solid.svg'
    })

    const currentLocation = useLocation()

    const NavigationButtonHandler = ({route}) => {
        

        if(route.includes('pokemon-details')) {
            console.log(route)
            return (
                <BackButton />
            )
        } else {
            return (
                <FilterDropdown />
            )
        }
    }

    return (
        <StyledNavbar theme={theme}>
            <FilterModal {...{showFilterModal, setShowFilterModal, filterTypeTheme, setFilterTypeTheme}} />
            <Container>
                <div className="buttons-section">
                    <MobileModalFilterButton {...{setShowFilterModal, filterTypeTheme}} />
                    <NavigationButtonHandler route={currentLocation.pathname}/>
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
    transition: 0.3s ease;

    a {
        display: flex;
    }

    .buttons-section {
        display: flex;
        gap: 1.6rem;
    }

    @media (max-width: ${deviceBreakpoint.mobile}) {
        padding: 1.3rem 2.2rem;
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
import { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-context"
import { BackButton } from "../back-button"
import { FilterDropdown } from "../filter-dropdown"
import { FilterModal } from "../filter-modal"
import { MobileModalFilterButton } from "../mobile-filter-button"
import { ThemeTogglerButton } from "../theme-toggler-button"
import { StyledNavbar, Container } from "./style"

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
            return (
                <BackButton />
            )
        } else {
            return (
                <>
                    <MobileModalFilterButton {...{setShowFilterModal, filterTypeTheme}} />
                    <FilterDropdown />
                </>
                
            )
        }
    }

    return (
        <StyledNavbar theme={theme}>
            <FilterModal {...{showFilterModal, setShowFilterModal, filterTypeTheme, setFilterTypeTheme}} />
            <Container>
                <div className="buttons-section">
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
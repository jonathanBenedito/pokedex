import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { faFilter, faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const FilterDropdown = () => {

    const { theme } = useContext(ThemeContext)
    const [showMenu, setShowMenu] = useState(false)

    return (
        <Section theme={theme} onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
            <div className="dropdown-menu">
                <div className="row">
                    <div className="pokemon-type-icon">
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <p className="pokemon-type-name">All</p>
                </div>
                <div className="row">
                    <div className="pokemon-type-icon">
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <p className="pokemon-type-name">All</p>
                </div>
            </div>
            <div className="label">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faFilter} />             
                </div>
                <p>Filter by type</p>
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 210px;
    background-color: ${props => props.theme.dropdownBackgroundColor};
    align-self: center;
    border-radius: 2.45rem;
    padding-right: 1.5rem;
    color: white;
    position: relative;
    
    .dropdown-menu {
        display: none;
    }

    ${props => props.showMenu && css `
        border-bottom-right-radius: 0;

        .dropdown-menu {
            display: block;
            position: absolute;
            right: 0;
            top: 34px;
            background-color: ${props => props.theme.dropdownMenuBackgroundColor};
            width: 192px;
            height: 75vh;
            border: 2px solid ${props => props.theme.dropdownMenuBorder};
            border-bottom-left-radius: 1.5rem;
            border-bottom-right-radius: 1.5rem;
            padding: 1.3rem;
        }
    
        .dropdown-menu .row {
            display: flex;
            gap: 1.3rem;
            border-bottom: 1px solid ${props => props.theme.dividerColor};
            padding: 0.6rem 0;
        }
    
        .dropdown-menu .row .pokemon-type-icon {
            width: 26px;
            height: 26px;
            border-radius: 100%;
            color: black;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            background-color: white;
        }
    
        .dropdown-menu .row .pokemon-type-name{
            color: ${props => props.theme.defaultFontColor};
        }
    `}

    .label {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    .label .icon-container {
        background-color: ${props => props.theme.dropdownIconBackgroundColor};
        display: flex;
        align-items: center;
        width: 34px;
        height: 34px;
        justify-content: center;
        font-size: 2rem;
        border-radius: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        color: black;
    }

    .label p {
        font-size: 1.8rem;
    }
`
import styled, { css } from "styled-components"
import { deviceBreakpoint } from "../../variables"

export const Container = styled.section`
    display: flex;
    max-width: 626px;
    width: 100%;
    justify-content: center;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        height: 100%
    }
`

export const PokemonInformationTab = styled.div`  
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        max-width: 241px;
        height: 160px;
    }
`

export const TabNav = styled.nav`
    display: flex;
`

export const Tab = styled.div`
    text-transform: uppercase;
    background-color: ${props => props.theme.navigationTabInactiveBackgroundColor};
    padding: 0.4rem 2.7rem;
    border-radius: 1rem 1rem 0 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.navigationTabHoverBackgroundColor};
        color: ${props => props.theme.navigationTabHoverColor};
    }

    ${props => props.selectedTab === props.tabName && css`
        background-color: ${props => props.theme.navigationTabActiveBackgroundColor};
        color: ${props => props.theme.navigationTabActiveColor};
        z-index: 1;

        &:hover {
            background-color: ${props => props.theme.navigationTabActiveBackgroundColor};
            color: ${props => props.theme.navigationTabActiveColor};
        }
    `}

    @media (max-width: ${deviceBreakpoint.mobile}) {
        font-size: 1.2rem;
        padding: 0.4rem 1.8rem;
        border-radius: 0.5rem 0.5rem 0 0;
    }
`

export const TabBody = styled.div`
    background: url(${props => props.theme.tabBodyBackgroundIllustration}) center center no-repeat;
    background-position: 80% 75%;
    background-color: ${props => props.theme.navigationTabBodyBackgroundColor};
    height: 100%;
    border-radius: 0px 4rem 4rem 4rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2.8rem;
    z-index: 2;
    

    @media (max-width: ${deviceBreakpoint.mobile}) {
        background: url(${props => props.theme.tabBodyBackgroundIllustrationMobile}) center center no-repeat;
        background-position: 80% 75%;
        background-color: ${props => props.theme.navigationTabBodyBackgroundColor};
        border-radius: 0 1.5rem 1.5rem 1rem;
        padding: 1rem 1.6rem;
    }
`

export const TabContent = styled.div`
    display: none;
    overflow-y: auto;
    max-height: 320px;
    font-size: 1.6rem;

    ${props => props.selectedTab === props.tabName && css`
        display: flex;
    `}

    @media (max-width: ${deviceBreakpoint.mobile}) {
        max-height: 110px;
        font-size: 1.2rem;

        ::-webkit-scrollbar {
            width: 2px;
        }
    }
`

export const PokemonMoveList = styled.ul`
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        row-gap: 0.4rem;
    }
`

export const PokemonMoveRow = styled.li`
    display: flex;
    gap: 1.5rem;
    align-items: center;   
    font-weight: 600;
    padding-bottom: 1rem;
    width: 100%;
    flex-basis: 180px;
    text-transform: capitalize;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        gap: 0.7rem;
        max-height: 148px;
        padding-bottom: 0.4rem;
    }
`

export const PokemonAbilities = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1rem;
`

export const PokemonAbilityRow = styled.li`

    .ability-name {
        margin-bottom: 1.2rem;
        text-transform: capitalize;
    }

    .ability-description {
        padding-bottom: 1.7rem;
        border-bottom: 1px solid ${props => props.theme.dividerColor};
    }

    @media (max-width: ${deviceBreakpoint.mobile}) {
        .ability-name {
            margin-bottom: 0.5rem;
        }
    
        .ability-description {
            padding-bottom: 0.8rem;
            border-bottom: 1px solid ${props => props.theme.dividerColor};
            font-size: 1.2rem;
        }
    }
`
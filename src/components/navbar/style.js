import styled from "styled-components"
import { deviceBreakpoint } from "../../variables"

export const StyledNavbar = styled.nav`
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

export const Container = styled.div`
    {
        display: flex;
        width: 100%;
        max-width: 1240px;
        justify-content: space-between;
    }
`
import styled from "styled-components"
import { deviceBreakpoint } from "../../variables"

export const Section = styled.section`
    width: ${props => props.size};
    height: ${props => props.size};
    background-color: ${props => props.backgroundColor};
    border-radius: 100%;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;
    }

    @media (max-width: ${deviceBreakpoint.mobile}) {
        width: ${props => props.responsiveSize};
        height: ${props => props.responsiveSize};
    }
`
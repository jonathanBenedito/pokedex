import styled, { css } from "styled-components"
import { deviceBreakpoint } from "../../variables"

export const StyledBackButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 210px;
    background-color: ${props => props.theme.backButtonLabelBackgroundColor};
    align-self: center;
    border-radius: 2.45rem;
    padding-right: 1.5rem;
    color: white;
    position: relative;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: ${props => props.theme.backButtonIconBackgroundColor};
        color: ${props => props.theme.backButtonHoverColor};
    }

    ${props => props.showMenu && css `
        background-color: ${props => props.theme.backButtonIconBackgroundColor};
        color: ${props => props.theme.backButtonHoverColor};
        border-bottom-right-radius: 0;
    `}

    @media (max-width: ${deviceBreakpoint.mobile}) {
        display: none;
    }
`

export const Label = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .text {
        text-transform: capitalize;
        font-size: 1.8rem;
    }
`

export const IconContainer = styled.div`
    background-color: ${props => props.theme.backButtonIconBackgroundColor};
    display: flex;
    align-items: center;
    width: 34px;
    height: 34px;
    justify-content: center;
    border-radius: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: black;
    cursor: pointer;
    padding: 0.6rem;
    font-size: 1.8rem;
`
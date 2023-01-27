import styled, { css } from "styled-components";
import { deviceBreakpoint } from "../../variables";

export const StyledFilterDropdown = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 210px;
    background-color: ${props => props.theme.dropdownLabelBackgroundColor};
    align-self: center;
    border-radius: 2.45rem;
    padding-right: 1.5rem;
    color: white;
    position: relative;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: ${props => props.theme.dropdownIconBackgroundColor};
        color: ${props => props.theme.dropdownHoverColor};
    }

    ${props => props.showMenu && css `
        background-color: ${props => props.theme.dropdownIconBackgroundColor};
        color: ${props => props.theme.dropdownHoverColor};
        border-bottom-right-radius: 0;
    `}

    @media (max-width: ${deviceBreakpoint.mobile}) {
        display: none;
    }
`

export const DropdownMenu = styled.ul`
    display: none;
    scrollbar-width: thin;
    scrollbar-color:    ${props => props.theme.dropdownMenuScrollbarThumbColor}
                        ${props => props.theme.dropdownMenuScrollbarTrackColor};

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.dropdownMenuScrollbarTrackColor};
        border-radius: 0;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.dropdownMenuScrollbarThumbColor};
        border-radius: 0;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${props => props.theme.dropdownMenuScrollbarThumbHoverColor};
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: ${props => props.theme.dropdownMenuScrollbarThumbActiveColor};
    }

    ${props => props.showMenu && css `
        display: block;
        position: absolute;
        right: 0px;
        top: 36px;
        background-color: ${props => props.theme.dropdownMenuBackgroundColor};
        width: 192px;
        height: 75vh;
        overflow-y: scroll;
        z-index: 1;

        border-radius: 0 0 0 1.5rem;
        padding: 1.3rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        cursor: default;

        .row {
            display: flex;
            gap: 1.3rem;
            border-bottom: 1px solid ${props => props.theme.dividerColor};
            padding: 0.6rem 0.6rem;
            cursor: pointer;
            transition: ease 0.15s;
        }

        .row:hover {
            background-color: ${props => props.theme.dropdownMenuRowHoverColor};
        }

        .row .pokemon-type-name{
            color: ${props => props.theme.defaultFontColor};
            text-transform: capitalize;
        }
    `}
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
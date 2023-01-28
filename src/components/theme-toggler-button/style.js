import styled, { css } from "styled-components"
import { themes } from "../../objects/themes"

export const StyledThemeButton = styled.button`
    display: flex;
    color: white;
    background-color: ${props => props.theme.themeTogglerBackgroundColor};
    width: 92px;
    align-items: center;
    border-radius: 5rem;
    padding: 4px;
    transition: 0.3s ease;
    cursor: pointer;
`

export const IconContainer = styled.div`
    font-size: 1.8rem;
    background-color: ${props => props.theme.themeTogglerButtonColor};
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    transition: 0.3s ease;
    transform: translateX(0);

    ${props => props.theme === themes.dark && css`
        transform: translateX(58px);
    `}
`
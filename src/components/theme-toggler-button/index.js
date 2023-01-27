import styled, { css } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import { themes } from "../../objects/themes"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <StyledThemeButton
            {...{theme}}
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
        >
            <IconContainer {...{theme}}>
                <img src={theme.themeIcon} alt="Theme icon"/>
            </IconContainer>
        </StyledThemeButton>
    )
}

const StyledThemeButton = styled.button`
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

const IconContainer = styled.div`
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
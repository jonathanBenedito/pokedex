import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import { StyledThemeButton, IconContainer } from "./style"
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
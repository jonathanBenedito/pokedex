import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import { themes } from "../../contexts/theme-context/themes"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <Section
            theme={theme}
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
        >
            <div className="icon-container">
                <FontAwesomeIcon icon={faSun} />
            </div>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    color: white;
    background-color: ${props => props.theme.themeTogglerBackgroundColor};
    width: 92px;
    align-items: center;
    border-radius: 5rem;
    padding: 4px;

    .icon-container {
        font-size: 1.8rem;
        background-color: ${props => props.theme.themeTogglerButtonColor};
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }
`
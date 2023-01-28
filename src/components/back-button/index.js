import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { IconContainer, Label, StyledBackButton } from "./style"

export const BackButton = () => {
    const { theme } = useContext(ThemeContext)

    const navigate = useNavigate()

    return (
        <StyledBackButton {...{theme}} onClick={() => navigate('/')}>
            <Label>
                <IconContainer {...{theme}}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </IconContainer>
                <p className="text">Go back</p>
            </Label>
        </StyledBackButton>
    )
}
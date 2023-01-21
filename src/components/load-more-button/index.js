import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

export const LoadMoreButton = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <StyledLoadMoreButton {...{theme}} onClick={() => alert("hi")}>
            <IconContainer {...{theme}}>
                <FontAwesomeIcon icon={faCirclePlus} />
            </IconContainer>
            <p className='label'>Load More</p>
        </StyledLoadMoreButton>
    )
}

const StyledLoadMoreButton = styled.div`
    display: flex;
    background-color: ${props => props.theme.pokemonCardBackgroundColor};
    border-radius: 200px 70px 70px 200px;
    width: 244px;
    height: 112px;
    gap: 1rem;
    transition: ease 0.3s;
    align-items: center;
    cursor: pointer;

    .label {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${props => props.theme.loadMoreCardColor};
    }

    &:hover {
        background-color: ${props => props.theme.loadMoreCardHoverBackgroundColor};
    }

    &:hover > div {
        color: ${props => props.theme.loadMoreCardHoverColor};
    }
`

const IconContainer = styled.div`
    width: 112px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    transition: ease 0.3s;
    color: ${props => props.theme.loadMoreIconColor};
`
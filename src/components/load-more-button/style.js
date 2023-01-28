import styled from "styled-components"

export const StyledLoadMoreButton = styled.button`
    display: flex;
    background-color: ${props => props.theme.pokemonCardBackgroundColor};
    border-radius: 200px 70px 70px 200px;
    width: 250px;
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

export const IconContainer = styled.div`
    width: 112px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    transition: ease 0.3s;
    color: ${props => props.theme.loadMoreIconColor};
`
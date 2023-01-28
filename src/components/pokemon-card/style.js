import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledPokemonCard = styled(Link)`
    display: flex;
    background-color: ${props => props.theme.pokemonCardBackgroundColor};
    border-radius: 200px 70px 70px 200px;
    width: 250px;
    height: 112px;
    gap: 1rem;
    transition: ease 0.3s;

    &:hover {
        background-color: ${props => props.color};
    }
`

export const ImageContainer = styled.div`
    width: 112px;
    height: 112px;
    background: url('/images/pokeball-card-background.png');
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Information = styled.div`
    padding: 0.9rem 0.8rem 0.9rem 0;
    color: white;
    display: flex;
    flex-direction: column;

    .name {
        width: 120px;
        font-weight: 600;
        font-size: 1.6rem;
        margin-bottom: 0.7rem;
        text-transform: capitalize;
    }

    .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        height: 100%;
        widht: 100%;
    }

    .icon-type-container {
        display: flex;
        gap: 0.7rem;
        align-self: end;
    }

    .id {
        font-size: 1.4rem;
        align-self: flex-end;
    }
`
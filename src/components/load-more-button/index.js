import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { PokemonsContext } from "../../contexts/pokemons-context"

export const LoadMoreButton = ({loadMorePokemons}) => {

    const { theme } = useContext(ThemeContext)
    const { pokemonList, setPokemonList, fetchList } = useContext(PokemonsContext) 

    async function loadMorePokemons (nextUrl) {
        const pokemons = await fetchList(nextUrl)
        const detailedList = pokemons.detailedList
        const newUrl = pokemons.nextLoadUrl

        setPokemonList({
            pokemons: [...pokemonList.pokemons, ...detailedList],
            detailedList, nextLoadUrl: newUrl
        })
    }

    return (
        <StyledLoadMoreButton {...{theme}} onClick={() => loadMorePokemons(pokemonList.nextLoadUrl)} id="ld-btn">
     
            <IconContainer {...{theme}}>
                <FontAwesomeIcon icon={faCirclePlus} />
            </IconContainer>
            
            <p className='label'>Load More</p>

        </StyledLoadMoreButton>
    )
}

const StyledLoadMoreButton = styled.button`
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
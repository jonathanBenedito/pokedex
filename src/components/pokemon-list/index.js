import { useContext } from "react"
import styled from "styled-components"
import { PokemonsContext } from "../../contexts/pokemons-context"
import { ThemeContext } from "../../contexts/theme-context"
import { deviceBreakpoint } from "../../variables"
import { LoadMoreButton } from "../load-more-button"
import { PokemonCard } from "../pokemon-card"

export const PokemonList = () => {
    const { theme } = useContext(ThemeContext)
    const { pokemonList } = useContext(PokemonsContext)

    const RenderPokemonList = ({pokemons}) => {
        return (
            <>
                {pokemons.map(pokemon => (
                    <PokemonCard {...pokemon} key={pokemon.id} />
                ))}
            </>
        )
    }

    return (
        <StyledPokemonList id="pokemon-list-container" {...theme}>
            <RenderPokemonList pokemons={pokemonList.pokemons} />
            <LoadMoreButton />
        </StyledPokemonList>
    )
}

const StyledPokemonList = styled.section`
    display: flex;   
    max-width: 1100px;
    height: 410px;
    flex-wrap: wrap;
    overflow-y: scroll;
    gap: 30px 16px;
    overflow-anchor: none;
    justify-content: center;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        padding-right: 10px;

        ::after {
            content:'';
            position: absolute;
            z-index: -1;
            height: 380px;
            top: 60px;
            right: 45px;
            width: 2px;
            background: ${props => props.theme.scrollbarTrackColor};
        }

        ::-webkit-scrollbar {
            width: 2px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }
   
        ::-webkit-scrollbar-track-piece:start {
            margin-top: 10px;
        }

        ::-webkit-scrollbar-track-piece:end {
            margin-bottom: 15px;
        }
    }
`
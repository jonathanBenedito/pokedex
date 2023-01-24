import { useContext } from "react"
import styled from "styled-components"
import { PokemonsContext } from "../../contexts/pokemons-context"
import { deviceBreakpoint } from "../../variables"
import { LoadMoreButton } from "../load-more-button"
import { PokemonCard } from "../pokemon-card"

export const PokemonList = () => {
    const { pokemonList } = useContext(PokemonsContext)

    const RenderPokemonList = ({pokemons}) => {
        return (
            <>
                {pokemons.map(pokemon => (
                    <PokemonCard {...pokemon} key={pokemon.id}/>
                ))}
            </>
        )
    }

    return (
        <Section id="pokemon-list-container">
            <RenderPokemonList pokemons={pokemonList.pokemons} />
            <LoadMoreButton />
        </Section>
    )
}

const Section = styled.section`
    display: flex;   
    max-width: 1100px;
    height: 410px;
    flex-wrap: wrap;
    overflow-y: scroll;
    gap: 30px 16px;
    overflow-anchor: none;
    justify-content: center;
`
import { useEffect, useState } from "react"
import styled from "styled-components"
import { getPokemonList } from "../../services/pokemon"
import { LoadMoreButton } from "../load-more-button"
import { PokemonCard } from "../pokemon-card"

export const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState({
        pokemons: []
    })

    async function getPokemonDetails(url) {
        const response = await fetch(url)
        return await response.json()
    }

    const RenderPokemonList = ({pokemons}) => {
        return (
            <>
                {pokemons.map(pokemon => (
                    <PokemonCard {...pokemon} key={pokemon.id}/>
                ))}
            </>
        )
    }

    useEffect(() => {
        async function fetchList() {
            const pokemons = await getPokemonList()
            const pokemonsDetails = pokemons.results.map(async (pokemon) => {
                return await getPokemonDetails(pokemon.url)
            })
            const pokemonDetailedList = await Promise.all(pokemonsDetails)
            setPokemonList({pokemons: pokemonDetailedList})
        }
        fetchList()
    }, [])

    return (
        <Section>
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
`
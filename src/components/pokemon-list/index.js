import { useEffect, useState } from "react"
import styled from "styled-components"
import { getPokemonList } from "../../services/pokemon"
import { LoadMoreButton } from "../load-more-button"
import { PokemonCard } from "../pokemon-card"

export const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState({
        pokemons: [],
        nextUrl: ''
    })

    async function fetchList(url) {
        const pokemons = await getPokemonList(url)
        const pokemonsDetails = pokemons.results.map(async (pokemon) => {
            return await getPokemonDetails(pokemon.url)
        })
        const pokemonDetailedList = await Promise.all(pokemonsDetails)
        return {detailedList: pokemonDetailedList, nextUrl: pokemons.next}
    }

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

    async function loadMorePokemons (nextUrl = pokemonList.nextUrl) {
        const pokemons = await fetchList(nextUrl)
        const detailedList = pokemons.detailedList
        const newNextUrl = pokemons.nextUrl
        setPokemonList({
            pokemons: [...pokemonList.pokemons, ...detailedList],
            detailedList, nextUrl: newNextUrl
        })
    }

    useEffect(() => {
        async function fetchData() {
            const pokemons = await fetchList()
            setPokemonList({pokemons: pokemons.detailedList, nextUrl: pokemons.nextUrl})
        }
        fetchData()
    }, [])

    return (
        <Section id="pokemon-list-container">
            <RenderPokemonList pokemons={pokemonList.pokemons} />
            <LoadMoreButton {...{loadMorePokemons}} />
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
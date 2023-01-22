import { createContext, useState } from "react";
import { getPokemonDetailsByUrl, getPokemonList } from "../../services/pokemon";

export const PokemonsContext = createContext({})

export const PokemonsProvider = (props) => {
    const [pokemonList, setPokemonList] = useState({
        pokemons: [],
        nextLoadUrl: ''
    })

    async function fetchList(url) {
        const pokemons = await getPokemonList(url)
        const pokemonsDetails = pokemons.results.map(async (pokemon) => {
            return await getPokemonDetailsByUrl(pokemon.url)
        })
        const pokemonDetailedList = await Promise.all(pokemonsDetails)
        return {detailedList: pokemonDetailedList, nextLoadUrl: pokemons.next}
    }   

    async function fetchData() {
        const pokemons = await fetchList()
        setPokemonList({pokemons: pokemons.detailedList, nextLoadUrl: pokemons.nextLoadUrl})
    }

    return (
        <PokemonsContext.Provider value={{pokemonList, setPokemonList, fetchList, fetchData}}>
            {props.children}
        </PokemonsContext.Provider>
    )
}
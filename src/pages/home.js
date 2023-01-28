import { useContext, useEffect } from "react"
import { Panel } from "../components/panel"
import { PokemonList } from "../components/pokemon-list"
import { PokemonsContext} from "../contexts/pokemons-context"

export const Home = () => {
    const { fetchData, pokemonList } = useContext(PokemonsContext)

    useEffect(() => {
        if (pokemonList.pokemons.length === 0) fetchData()
    }, [])

    return (
        <Panel>
            <PokemonList />
        </Panel>
    )
}
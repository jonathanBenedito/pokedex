import { useContext, useEffect } from "react"
import { Panel } from "../components/panel"
import { PokemonList } from "../components/pokemon-list"
import { PokemonsContext} from "../contexts/pokemons-context"

export const Home = () => {
    const { fetchData } = useContext(PokemonsContext)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Panel>
            <PokemonList />
        </Panel>
    )
}
import { useContext, useEffect } from "react"
import { Navbar } from "../components/navbar"
import { Panel } from "../components/panel"
import { PokemonList } from "../components/pokemon-list"
import { PokemonsContext} from "../contexts/pokemons-context"

export const Home = () => {
    const { fetchData } = useContext(PokemonsContext)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <Panel>
                <PokemonList />
            </Panel>
        </>
    )
}
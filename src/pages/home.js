import { Navbar } from "../components/navbar"
import { Panel } from "../components/panel"
import { PokemonList } from "../components/pokemon-list"

const Home = () => {
    return (
        <>
            <Navbar />
            <Panel>
                <PokemonList />
            </Panel>
        </>
    )
}

export { Home }
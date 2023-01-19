import { useParams } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Panel } from "../components/panel"

const PokemonInfo = () => {

    const { id } = useParams()

    return (
        <>
            Hello! {id}
        </>
    )
}

export { PokemonInfo }
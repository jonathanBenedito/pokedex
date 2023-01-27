import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Panel } from "../../components/panel"
import { PokemonDetailsContent } from "../../components/pokemon-details-content"
import { PokemonInformation } from "../../components/pokemon-information"
import { PokemonProfile } from "../../components/pokemon-profile"
import { getPokemonDetailsById } from "../../services/pokemon"

export const PokemonDetails = () => {

    const { id } = useParams()
    const [pokemonDetails, setPokemonDetails] = useState({
        abilities: [
            {
                ability: {
                    name: "",
                    url: ""
                },
            },
        ],
        id: 2,
        moves: [
            {
                move: {
                    name: "",
                    url: ""
                },
            },
        ],
        name: "",
        sprites: {
            other: {
                'official-artwork': {
                    front_default: "",
                    front_shiny: ""
                }
            },
        },
        types: [
            {
                slot: 1,
                type: {
                    name: "",
                    url: ""
                }
            },
            {
                slot: 2,
                type: {
                    name: "",
                    url: ""
                }
            }
        ],
    })

    useEffect(() => {
        async function fetchData() {
            const pokemonDetails = await getPokemonDetailsById(id)
            console.log(pokemonDetails)
            setPokemonDetails(pokemonDetails)
        }

        fetchData()
    }, [])

    return (
        <Panel>
            <PokemonDetailsContent>
                <PokemonProfile {...{ pokemonDetails }} />
                <PokemonInformation {...{ pokemonDetails }} />
            </PokemonDetailsContent>
        </Panel>
    )
}
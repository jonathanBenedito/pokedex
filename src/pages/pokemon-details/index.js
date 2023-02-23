import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LoadingAnimation } from "../../components/loading-animation"
import { Panel } from "../../components/panel"
import { PokemonDetailsContent } from "../../components/pokemon-details-content"
import { PokemonInformation } from "../../components/pokemon-information"
import { PokemonProfile } from "../../components/pokemon-profile"
import { getPokemonDetailsById } from "../../services/pokemon"
import { getPokemonMove } from "../../services/pokemon-move"

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
        detailedAbilities: [{
            name: "",
            effect_entries: [{
                effect: "",
                language: {
                    name: ""
                }
            }]
        }],
        id: 0,
        moves: [
            {
                move: {
                    name: "",
                    url: ""
                },
            },
        ],
        detailedMoves: [{
            name: "",
            type: { name: "" }
        }],
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

            const moveDetails = pokemonDetails.moves.map(async (moveObject) => {
                return getPokemonMove(moveObject.move.url)
            })
            const detailedMoves = await Promise.all(moveDetails)

            const abilitiesDetails = pokemonDetails.abilities.map(async (abilityObject) => {
                return getPokemonMove(abilityObject.ability.url)
            })
            const detailedAbilities = await Promise.all(abilitiesDetails)
            
            setPokemonDetails({...pokemonDetails, detailedMoves, detailedAbilities})
        }

        fetchData()
    }, [])

    const RenderPokemonDetails = ({pokemonDetails}) => {
        while(pokemonDetails.id === 0) {
            return (
                <PokemonDetailsContent>
                    <LoadingAnimation />
                </PokemonDetailsContent>
            )
        }
        return (
            <PokemonDetailsContent>
                <PokemonProfile {...{ pokemonDetails }} />
                <PokemonInformation {...{ pokemonDetails }} />
            </PokemonDetailsContent>
        )
    }

    return (
        <Panel>
            <RenderPokemonDetails {...{ pokemonDetails }}/>
        </Panel>
    )
}
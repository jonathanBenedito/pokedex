import { useContext } from "react"
import { PokemonsContext } from "../../contexts/pokemons-context"
import { ThemeContext } from "../../contexts/theme-context"
import { LoadMoreButton } from "../load-more-button"
import { PokemonCard } from "../pokemon-card"
import { StyledPokemonList } from "./style"

export const PokemonList = () => {
    const { theme } = useContext(ThemeContext)
    const { pokemonList } = useContext(PokemonsContext)

    const RenderPokemonList = ({pokemons}) => {
        return (
            <>
                {pokemons.map(pokemon => (
                    <PokemonCard {...pokemon} key={pokemon.id} />
                ))}
            </>
        )
    }

    return (
        <StyledPokemonList id="pokemon-list-container" {...theme}>
            <RenderPokemonList pokemons={pokemonList.pokemons} />
            <LoadMoreButton />
        </StyledPokemonList>
    )
}
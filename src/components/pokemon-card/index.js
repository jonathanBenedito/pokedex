import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"
import { AddLeadingZeros } from "../../utils"
import { PokemonIconType } from "../pokemon-icon-type"
import { StyledPokemonCard, ImageContainer, Information } from "./style"

export const PokemonCard = ({id, sprites, name, types}) => {

    const { theme } = useContext(ThemeContext)

    function RenderPokemonIconType(typeObject) {
        return (
            <PokemonIconType typeName={typeObject.type.name}/>
        )
    }

    const [pokemonTypeColor, setPokemonTypeColor] = useState({
        color: '#9C9C9C'
    })

    useEffect(() => {
        setPokemonTypeColor({color: getPokemonTypeTheme(types[0].type.name).color})
    }, [])

    return (
        <StyledPokemonCard
            to={`/pokemon-details/${id}`}
            key={id}
            color={pokemonTypeColor.color}
            {...{theme}}
        >
            <ImageContainer>
                <img src={sprites.versions["generation-v"]["black-white"].animated.front_default ?? 
                            sprites.other["official-artwork"].front_default
                        }
                    alt={`${name} sprite`} 
                />
            </ImageContainer>
            <Information>
                <p className="name">{name}</p>
                <div className="details">
                    <div className="icon-type-container">
                        {types.map(type => (
                            <div key={type.slot}>{RenderPokemonIconType(type)}</div>
                        ))}
                    </div>
                    <p className="id">#{AddLeadingZeros(id)}</p>
                </div>             
            </Information>
        </StyledPokemonCard>
    )
}

PokemonCard.defaultProps = {
    id: 0,
    sprites: {},
    name: 'No name',
    types: []
}
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"
import { PokemonIconType } from "../pokemon-icon-type"

export const PokemonCard = ({id, sprites, name, types, test}) => {

    const { theme } = useContext(ThemeContext)

    function RenderPokemonIconType(typeObject) {
        return (
            <PokemonIconType typeName={typeObject.type.name}/>
        )
    }

    function AddLeadingZeros(number) {
        return Math.floor(number).toString().padStart(5, '0')
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
                <img src={sprites.versions["generation-v"]["black-white"].animated.front_default ?? '/images/placeholder.webp'} />
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

const StyledPokemonCard = styled(Link)`
    display: flex;
    background-color: ${props => props.theme.pokemonCardBackgroundColor};
    border-radius: 200px 70px 70px 200px;
    width: 250px;
    height: 112px;
    gap: 1rem;
    transition: ease 0.3s;

    &:hover {
        background-color: ${props => props.color};
    }
`

const ImageContainer = styled.div`
    width: 112px;
    height: 112px;
    background: url('/images/pokeball-card-background.png');
    display: flex;
    align-items: center;
    justify-content: center;
`

const Information = styled.div`
    padding: 0.9rem 0.8rem 0.9rem 0;
    color: white;
    display: flex;
    flex-direction: column;

    .name {
        width: 120px;
        font-weight: 600;
        font-size: 1.6rem;
        margin-bottom: 0.7rem;
        text-transform: capitalize;
    }

    .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        height: 100%;
        widht: 100%;
    }

    .icon-type-container {
        display: flex;
        gap: 0.7rem;
        align-self: end;
    }

    .id {
        font-size: 1.4rem;
        align-self: flex-end;
    }
`
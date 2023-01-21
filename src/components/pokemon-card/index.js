import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"
import { PokemonIconType } from "../pokemon-icon-type"

export const PokemonCard = ({id, sprites, name, types}) => {

    const { theme } = useContext(ThemeContext)

    function RenderPokemonIconType(typeObject) {
        return (
            <PokemonIconType typeName={typeObject.type.name}/>
        )
    }

    function AddLeadingZeros(number) {
        return Math.floor(number).toString().padStart(3, '0')
    }

    const [pokemonTypeColor, setPokemonTypeColor] = useState({
        color: '#9C9C9C'
    })

    useEffect(() => {
        setPokemonTypeColor({color: getPokemonTypeTheme(types[0].type.name).color})
    }, [])

    return (
        <StyledPokemonCard
            to={`/pokemon-info/${id}`}
            className="pokemon-card"
            key={id}
            color={pokemonTypeColor.color}
            {...{theme}}
        >
            <ImageContainer>
                <img src={sprites.versions["generation-v"]["black-white"].animated.front_default} />
            </ImageContainer>
            <Information>
                <p className="name">{name}</p>
                <div className="icon-type-container">
                    {types.map(type => (
                        <div key={type.slot}>{RenderPokemonIconType(type)}</div>
                    ))}
                </div>
                <p className="id">#{AddLeadingZeros(id)}</p>
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
    width: 244px;
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

    .name {
        font-weight: 600;
        font-size: 1.8rem;
        margin-bottom: 0.3rem;
        text-transform: capitalize;
    }

    .icon-type-container {
        display: flex;
        margin-bottom: 1.6rem;
        gap: 0.7rem;
    }

    .id {
        align-self: flex-end;
    }
`
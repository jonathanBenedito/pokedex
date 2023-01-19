import { useEffect, useState } from "react"
import styled from "styled-components"

export const PokemonIconTypes = ({typeName}) => {
    
    const pokemonTypes = [
        {
            name: 'electric',
            color: '#E0C439',
            icon: '/images/pokemon-types-icons/electric.svg',
        },
        {
            name: 'ice',
            color: '#74CBC2',
            icon: '/images/pokemon-types-icons/ice.svg',
        },
    ]

    const type = pokemonTypes.filter(type => type.name === typeName)[0]

    return (
        <Section backgroundColor={type.color}>
            <img src={type.icon} />
        </Section>
    )
}

const Section = styled.section`
    width: 20px;
    height: 20px;
    background-color: ${props => props.backgroundColor};

`
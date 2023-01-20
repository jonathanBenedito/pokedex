import { useEffect, useState } from "react"
import styled from "styled-components"
import { pokemonTypes } from "./pokemonTypes"

export const PokemonIconTypes = ({typeName}) => {

    const type = pokemonTypes.find(type => type.name === typeName) ?? pokemonTypes.find(type => type.name === 'unknown')

    return (
        <Section backgroundColor={type.color}>
            <img src={type.icon} />
        </Section>
    )
}

PokemonIconTypes.defaultProps = {
    typeName: 'unknown'
}

const Section = styled.section`
    width: 26px;
    height: 26px;
    background-color: ${props => props.backgroundColor};
    border-radius: 100%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 20px;
    }
`
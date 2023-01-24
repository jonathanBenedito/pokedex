import { useEffect, useState } from "react"
import styled from "styled-components"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"

export const PokemonIconType = ({typeName, size}) => {

    const [type, setType] = useState({
        name: '',
        color: '',
        icon: ''
    })

    useEffect(() => {
        setType(getPokemonTypeTheme(typeName))
    })

    return (       
        <Section backgroundColor={type.color} {...{size}}>
            <img src={type.icon} />
        </Section>
    )
}

PokemonIconType.defaultProps = {
    typeName: 'all',
    size: '26px'
}

const Section = styled.section`
    width: ${props => props.size};
    height: ${props => props.size};
    background-color: ${props => props.backgroundColor};
    border-radius: 100%;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
`
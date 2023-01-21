import { useEffect, useState } from "react"
import styled from "styled-components"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"

export const PokemonIconType = ({typeName}) => {

    const [type, setType] = useState({
        name: '',
        color: '',
        icon: ''
    })

    useEffect(() => {
        setType(getPokemonTypeTheme(typeName))
    })

    return (       
        <Section backgroundColor={type.color}>
            <img src={type.icon} />
        </Section>
    )
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
        height: 18px;
    }
`
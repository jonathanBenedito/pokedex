import { useEffect, useState } from "react"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"
import { Section } from "./style"

export const PokemonIconType = ({typeName, size, responsiveSize}) => {

    const [type, setType] = useState({
        name: '',
        color: '',
        icon: ''
    })

    useEffect(() => {
        setType(getPokemonTypeTheme(typeName))
    })

    return (       
        <Section {...{size, responsiveSize, backgroundColor: type.color}}>
            <img src={type.icon} alt={`${type.name} icon`}/>
        </Section>
    )
}

PokemonIconType.defaultProps = {
    typeName: 'all',
    size: '26px',
    responsiveSize: '26px'
}
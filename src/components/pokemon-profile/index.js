import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"
import { PokemonIconType } from "../pokemon-icon-type"
import { Container, ImageContainer, NameRow, TypeRow, TypeTag } from "./styles"

export const PokemonProfile = ({pokemonDetails}) => {

    const pokemonTypeTheme = getPokemonTypeTheme(pokemonDetails.types[0].type.name)
    
    function AddLeadingZeros(number) {
        return Math.floor(number).toString().padStart(5, '0')
    }

    const RenderTypeTags = ({types}) => {
        return (
            <TypeRow>
                {types.map((object) => (                 
                    <TypeTag typeBackgroundColor={getPokemonTypeTheme(object.type.name).color} key={object.slot}>
                        <PokemonIconType typeName={object.type.name} size="42px" responsiveSize="25px"/>
                        <p className="type-name">{object.type.name}</p>
                    </TypeTag>   
                ))}                   
            </TypeRow>
        )
    }

    return (
        <Container>

                <ImageContainer {...{pokemonTypeTheme}}>
                    <img 
                        src={`${pokemonDetails.sprites.other["official-artwork"].front_default}`} 
                        alt="Pokemon image" />
                </ImageContainer>

                <NameRow>
                    <p className="pokemon-name">{pokemonDetails.name}</p>
                    <p className="pokemon-id">#{AddLeadingZeros(pokemonDetails.id)}</p>
                </NameRow>

                <RenderTypeTags types={pokemonDetails.types} />

        </Container>
    )
}
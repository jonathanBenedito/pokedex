import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { PokemonIconType } from "../pokemon-icon-type"
import { 
    PokemonMoveList,
    PokemonMoveRow,
    PokemonAbilities,
    PokemonAbilityRow,
    Tab,
    Container,
    PokemonInformationTab,
    TabNav,
    TabBody,
    TabContent
} from "./style"


export const PokemonInformation = ({pokemonDetails}) => {

    const [selectedTab, setSelectedTab] = useState('moves')

    const { theme } = useContext(ThemeContext)

    function replaceHyphen(word)  {
        return word.replace("-", " ")
    }

    const RenderPokemonMoveList = ({moves}) => {
        return (
            <PokemonMoveList {...{theme}}>

                {moves.map((move, index) => (
                    <PokemonMoveRow {...{theme}} key={index}>
                        {<PokemonIconType typeName={move.type.name} size="42px" responsiveSize="20px"/>}
                        <p className="move-name">{replaceHyphen(move.name)}</p>
                    </PokemonMoveRow>     
                ))}
        
            </PokemonMoveList>
        )
    }

    const RenderTranslatedAbility = ({effectEntries, language = "en"}) => {

        const filteredAbility = effectEntries.filter(entry => entry.language.name === language)
        
        const translatedAbility = filteredAbility.length > 0 ? filteredAbility[0].effect : ''

        return (
            <p className="ability-description">
                {translatedAbility}
            </p>
        )
    }

    const RenderPokemonAbilityList = ({abilities}) => {
        return (
            <PokemonAbilities>

                {abilities.map((ability, index) => (
                    <PokemonAbilityRow {...{ theme }} key={index}>
                        <h3 className="ability-name">{replaceHyphen(ability.name)}</h3>
                        <RenderTranslatedAbility effectEntries={ability.effect_entries} />
                    </PokemonAbilityRow>
                ))}

            </PokemonAbilities>
        )
    }

    return (
        <Container>

            <PokemonInformationTab>

                <TabNav>
                    <Tab {...{ selectedTab, theme, tabName: 'moves' }} onClick={() => setSelectedTab('moves')}>
                        moves
                    </Tab>
                    <Tab {...{ selectedTab, theme, tabName: 'abilities' }} onClick={() => setSelectedTab('abilities')}>
                        abilities
                    </Tab>
                </TabNav>

                <TabBody {...{ theme }}>

                    <TabContent {...{ selectedTab, tabName: 'moves' }}>
                        <RenderPokemonMoveList moves={pokemonDetails.detailedMoves} />
                    </TabContent>

                    <TabContent {...{ selectedTab, tabName: 'abilities' }}>
                        <RenderPokemonAbilityList abilities={pokemonDetails.detailedAbilities} />
                    </TabContent>

                </TabBody>

            </PokemonInformationTab>

        </Container>
    )
}
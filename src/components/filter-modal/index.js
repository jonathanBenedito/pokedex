import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonTypeList } from "../../services/pokemon-type"
import { PokemonIconType } from "../pokemon-icon-type"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"
import { PokemonsContext } from "../../contexts/pokemons-context"
import { OverlayScreen, PokemonTypeButton, ModalWindow, ModalBody, ModalHeader, PokemonTypeListRow } from "./style"

export const FilterModal = ({
    showFilterModal,
    setShowFilterModal,
    filterTypeTheme,
    setFilterTypeTheme
}) => {

    const { theme } = useContext(ThemeContext)
    const { fetchData, filterPokemonListByType } = useContext(PokemonsContext)
    
    const [pokemonTypeList, setPokemonTypeList] = useState([])

    async function filterPokemonByType(typeName, url) {
        const typeTheme = getPokemonTypeTheme(typeName)
        
        setFilterTypeTheme({
            name: typeName,
            color: typeTheme.color,
            icon: typeTheme.icon
        })

        setShowFilterModal(false)
        filterPokemonListByType(url)
    }

    function resetFilter() {
        const typeTheme = getPokemonTypeTheme('all')
        
        setFilterTypeTheme({
            color: typeTheme.color,
            icon: typeTheme.icon
        })

        fetchData()
    }

    useEffect(() => {
        async function fetchList() {
            const list = await getPokemonTypeList()
            const filteredTypeList = list.results.filter((type) => type.name !== 'shadow' && type.name !== 'unknown')
            
            setPokemonTypeList(filteredTypeList)
        }

        fetchList()
    }, [])

    const RenderPokemonTypes = ({pokemonTypeList}) => {
        return (
            pokemonTypeList.map((type, index) => (
                <PokemonTypeButton
                    key={index}
                    onClick={() => filterPokemonByType(type.name, type.url)}
                    typeName={type.name}
                    {...{filterTypeTheme}}
                >
                    <PokemonIconType typeName={type.name} size={'30px'}/>
                    <p className="type-name">{type.name}</p>
                </PokemonTypeButton>
            ))
        )
    }

    return (
        <OverlayScreen id="filter-modal" {...{showFilterModal, theme}}>
            <ModalWindow {...{theme}}>

                <ModalHeader {...{theme}}>
                    <h1>Filter by type</h1>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={() => setShowFilterModal(false)}/>
                </ModalHeader>

                <ModalBody {...{theme}}>

                    <PokemonTypeListRow>

                        <PokemonTypeButton
                            onClick={() => resetFilter()}
                            typeName={'all'}
                            {...{filterTypeTheme}}
                        >
                            <PokemonIconType
                                typeName={'all'} size={'30px'}/>
                            <p className="type-name">All</p>
                        </PokemonTypeButton>

                        <RenderPokemonTypes {...{pokemonTypeList}} />
                    </PokemonTypeListRow>
                    
                </ModalBody>

            </ModalWindow>
        </OverlayScreen>
    )
}
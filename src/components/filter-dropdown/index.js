import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { PokemonIconType } from "../pokemon-icon-type";
import { getPokemonTypeList } from "../../services/pokemon-type";
import { PokemonsContext } from "../../contexts/pokemons-context";
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme";
import { DropdownMenu, StyledFilterDropdown, Label } from "./style";
import { FilterIcon } from "../filter-icon";

export const FilterDropdown = () => {

    const { theme } = useContext(ThemeContext)
    const { fetchData, filterPokemonListByType } = useContext(PokemonsContext)

    const [showMenu, setShowMenu] = useState(false)
    const [pokemonTypes, setPokemonTypes] = useState([])

    const [typeTheme, setTypeTheme] = useState({
        name: 'Filter by type',
        color: 'white',
        icon: '/images/filter-solid.svg',  
    })

    function updateFilterIcon(typeName) {
        const typeTheme = getPokemonTypeTheme(typeName)
        setTypeTheme({
            name: typeName,
            color: typeTheme.color,
            icon: typeTheme.icon
        })
    }

    function filterPokemons(pokemonTypeObject) {
        updateFilterIcon(pokemonTypeObject.name)
        filterPokemonListByType(pokemonTypeObject.url)
    }

    function resetFilter() {
        updateFilterIcon('all')
        fetchData()
    }

    const RenderTypeList = ({list}) => {
        if(list.length > 0) {
            return (
                <>
                    <li className="row" onClick={() => resetFilter()}>
                        <PokemonIconType typeName={'all'}/>
                        <p className="pokemon-type-name">All</p>
                    </li>

                    {list.map((pokemonType, index) => (
                        <li className="row" key={index} onClick={() => filterPokemons(pokemonType)}>
                            <PokemonIconType typeName={pokemonType.name}/>
                            <p className="pokemon-type-name">{pokemonType.name}</p>
                        </li>
                    ))}
                </>
            )
        }
    }
    
    useEffect(() => {
        async function fetchList() {
            const typesData = await getPokemonTypeList()
            const filteredTypeList = typesData.results.filter((type) => type.name !== 'shadow' && type.name !== 'unknown')
            
            setPokemonTypes(filteredTypeList)
        }

        fetchList()
    }, [])

    return (
        <StyledFilterDropdown {...{theme}} onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} {...{typeTheme}}>
            
            <DropdownMenu {...{theme}} showMenu={showMenu}>
                <RenderTypeList list={pokemonTypes} />
            </DropdownMenu>

            <Label {...{theme}} backgroundColor={typeTheme.color}>
                <FilterIcon iconTheme={typeTheme} />
                <p className="text">{typeTheme.name}</p>
            </Label>
            
            <FontAwesomeIcon icon={faChevronDown} />

        </StyledFilterDropdown>
    )
}
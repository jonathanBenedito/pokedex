import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { PokemonIconType } from "../pokemon-icon-type";
import { getPokemonTypeList, getPokemonTypeDetailsByUrl } from "../../services/pokemon-type";
import { PokemonsContext } from "../../contexts/pokemons-context";
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme";
import { getPokemonDetailsByUrl } from "../../services/pokemon";
import { maxItems } from "../../variables"
import { DropdownMenu, StyledFilterDropdown, Label } from "./style";
import { MobileFilterButton } from "../mobile-filter-button";
import { FilterIcon } from "../filter-icon";

export const FilterDropdown = () => {

    const { theme } = useContext(ThemeContext)
    const { fetchData, setPokemonList, setReservedList } = useContext(PokemonsContext)

    const [showMenu, setShowMenu] = useState(false)
    const [pokemonTypes, setPokemonTypes] = useState([])

    const [typeTheme, setTypeTheme] = useState({
        color: 'white',
        icon: '/images/filter-solid.svg',  
    })

    function updateFilterIcon(typeName) {
        const typeTheme = getPokemonTypeTheme(typeName)
        setTypeTheme({
            color: typeTheme.color,
            icon: typeTheme.icon
        })
    }

    function resetFilter() {
        updateFilterIcon('all')
        fetchData()
    }

    async function fetchList(pokemons) {
        const pokemonsDetails = pokemons.map(async (pokemon) => {
            return await getPokemonDetailsByUrl(pokemon.url)
        })

        const pokemonDetailedList = await Promise.all(pokemonsDetails)
        return pokemonDetailedList
    }

    async function filterPokemonListByType(pokemonType) {
        updateFilterIcon(pokemonType.name)
        const pokemonTypeDetails = await getPokemonTypeDetailsByUrl(pokemonType.url)
        
        let pokemonList = [{name: '', url: ''}]
        pokemonList = pokemonTypeDetails.pokemon.map((item) => item.pokemon)

        const pokemonDetailedList = await fetchList(pokemonList)
        const splicedPokemonList = pokemonDetailedList.splice(0, maxItems)

        setReservedList(pokemonDetailedList)

        setPokemonList({
            pokemons: splicedPokemonList,
            nextLoadUrl: '',
            isFiltered: true
        })
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
                        <li className="row" key={index} onClick={() => filterPokemonListByType(pokemonType)}>
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
        <StyledFilterDropdown {...{theme}} onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
            
            <DropdownMenu {...{theme}} showMenu={showMenu}>
                <RenderTypeList list={pokemonTypes} />
            </DropdownMenu>

            <Label {...{theme}} backgroundColor={typeTheme.color}>
                <FilterIcon iconTheme={typeTheme} />
                <p className="text">Filter by type</p>
            </Label>
            
            <FontAwesomeIcon icon={faChevronDown} />

        </StyledFilterDropdown>
    )
}
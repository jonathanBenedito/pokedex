import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { PokemonIconType } from "../pokemon-icon-type";
import { getPokemonTypeList, getPokemonTypeDetailsByUrl } from "../../services/pokemon-type";
import { PokemonsContext } from "../../contexts/pokemons-context";
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme";
import { getPokemonDetailsByUrl } from "../../services/pokemon";

export const FilterDropdown = () => {

    const { theme } = useContext(ThemeContext)
    const { fetchData, setPokemonList } = useContext(PokemonsContext)

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

        setPokemonList({
            pokemons: pokemonDetailedList,
            nextLoadUrl: ''
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
                <div className="icon-container" id="filter-icon">
                    <img src={typeTheme.icon} />
                </div>
                <p className="text">Filter by type</p>
            </Label>
            
            <FontAwesomeIcon icon={faChevronDown} />

        </StyledFilterDropdown>
    )
}

const StyledFilterDropdown = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 210px;
    background-color: ${props => props.theme.dropdownBackgroundColor};
    align-self: center;
    border-radius: 2.45rem;
    padding-right: 1.5rem;
    color: white;
    position: relative;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: ${props => props.theme.dropdownIconBackgroundColor};
        color: ${props => props.theme.dropdownHoverColor};
    }

    ${props => props.showMenu && css `
        background-color: ${props => props.theme.dropdownIconBackgroundColor};
        color: ${props => props.theme.dropdownHoverColor};
        border-bottom-right-radius: 0;
    `}
`

const DropdownMenu = styled.ul`
    display: none;
    scrollbar-width: thin;
    scrollbar-color: #cdcdcd #f0f0f0;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f0f0f0;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #cdcdcd;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #b7b6b6;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: #767676;
    }

    ${props => props.showMenu && css `
        display: block;
        position: absolute;
        right: 0px;
        top: 36px;
        background-color: ${props => props.theme.dropdownMenuBackgroundColor};
        width: 192px;
        height: 75vh;
        overflow-y: scroll;
        z-index: 1;

        border-radius: 0 0 0 1.5rem;
        padding: 1.3rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        cursor: default;

        .row {
            display: flex;
            gap: 1.3rem;
            border-bottom: 1px solid ${props => props.theme.dividerColor};
            padding: 0.6rem 0.6rem;
            cursor: pointer;
            transition: ease 0.15s;
        }

        .row:hover {
            background-color: ${props => props.theme.dropdownMenuRowHoverColor};
        }

        .row .pokemon-type-name{
            color: ${props => props.theme.defaultFontColor};
            text-transform: capitalize;
        }
    `}
`

const Label = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .icon-container {
        background-color: ${props => props.backgroundColor};
        display: flex;
        align-items: center;
        width: 34px;
        height: 34px;
        justify-content: center;
        border-radius: 100%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        color: black;
    }

    .icon-container img {
        width: 20px;
    }

    .text {
        font-size: 1.8rem;
    }
`
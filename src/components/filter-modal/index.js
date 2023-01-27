import { useContext, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonTypeList } from "../../services/pokemon-type"
import { PokemonIconType } from "../pokemon-icon-type"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getPokemonTypeTheme } from "../../services/pokemon-type-theme"
import { PokemonsContext } from "../../contexts/pokemons-context"

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

const OverlayScreen = styled.div`
    opacity: 0;
    display: none;

    ${props => props.showFilterModal && css ` 
        opacity: 1;      
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: ${props => props.theme.filterModalOverlayScreen};
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 99;
        animation-name: fadein;
        animation-duration: 0.3s;

        @keyframes fadein {
            from {
                opacity: 0;
            }
            
            to {
                opacity: 1;  
            }
        }
    `}
`

const ModalWindow = styled.section`
    height: 85vh;
    max-width: 328px;
    background-color: ${props => props.theme.filterModalBackgroundColor};
    padding: 3.8rem 4rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 6rem;
    display: flex;
    flex-direction: column;

    animation-name: slidein;
    animation-duration: 0.75s;

    @keyframes slidein {
        from {
            transform: translateY(-200%);
        }
        
        to {
            transform: translateY(0%);
        }
    }
`

const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.filterModalTitleColor};
    border-bottom: 1px solid ${props => props.theme.filterModalHeaderBorderColor};
    margin-bottom: 2.1rem;
    align-items: center;
    padding-bottom: 0.9rem;
    font-size: 1.8rem;

    svg {
        margin-top: 0.5rem;
        font-size: 2.2rem;
        cursor: pointer;
    }
`

const ModalBody = styled.div`
    color: ${props => props.theme.filterModalFontColor};
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    height: 100%;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
`

const PokemonTypeButton = styled.li`
    width: 68px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    cursor: pointer;
    
    .type-name {
        margin-top: 0.55rem;
        font-size: 1.2rem;
        text-transform: capitalize;
    }

    ${props => props.typeName === props.filterTypeTheme.name && css `
        border: 2px solid ${props.filterTypeTheme.color};
    `}
`

const PokemonTypeListRow = styled.ul`
    display: flex;
    gap: 1rem 2.1rem;
    justify-content: center;
    flex-wrap: wrap;

`
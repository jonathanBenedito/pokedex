import { useContext, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonTypeList } from "../../services/pokemon-type"
import { PokemonIconType } from "../pokemon-icon-type"

export const FilterModal = ({showFilterModal}) => {

    const { theme } = useContext(ThemeContext)
    
    const [pokemonTypeList, setPokemonTypeList] = useState([])

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
            pokemonTypeList.map(type => (
                <PokemonTypeButton>
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
                </ModalHeader>

                <ModalBody {...{theme}}>

                    <PokemonTypeListRow>

                        <PokemonTypeButton>
                            <PokemonIconType typeName={'all'} size={'30px'}/>
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
    display: none;

    ${props => props.showFilterModal && css `       
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
`

const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.filterModalTitleColor};
    border-bottom: 1px solid ${props => props.theme.filterModalHeaderBorderColor};
    margin-bottom: 2.1rem;

    h1 {
        padding-bottom: 0.9rem;
    }
`

const ModalBody = styled.div`
    color: ${props => props.theme.filterModalFontColor};
    overflow-y: auto;
    max-height: 537px;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
    
    .type-name {
        margin-top: 0.55rem;
        font-size: 1.2rem;
        text-transform: capitalize;
    }
`

const PokemonTypeListRow = styled.ul`
    display: flex;
    gap: 1rem 2.1rem;
    justify-content: center;
    flex-wrap: wrap;

`
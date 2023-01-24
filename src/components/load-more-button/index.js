import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { PokemonsContext } from "../../contexts/pokemons-context"
import { maxItems } from "../../variables"

export const LoadMoreButton = ({loadMorePokemons}) => {

    const { theme } = useContext(ThemeContext)
    const { pokemonList, setPokemonList, fetchList, reservedList, setReservedList } = useContext(PokemonsContext) 
    
    const [disableButton, setDisableButton] = useState(false)

    const RenderLoadMoreButton = ({isDisabled}) => {
        if(!isDisabled) {
            return (
                <StyledLoadMoreButton {...{theme}} onClick={() => loadMorePokemons(pokemonList.nextLoadUrl)} id="ld-btn">
             
                    <IconContainer {...{theme}}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </IconContainer>
                    
                    <p className='label'>Load More</p>
        
                </StyledLoadMoreButton>
            )
        }
    }

    async function loadMorePokemons (nextUrl) {
        let detailedList = []
        let newUrl = ''

        if(!pokemonList.isFiltered) {
            const pokemons = await fetchList(nextUrl)
            detailedList = pokemons.detailedList
            newUrl = pokemons.nextLoadUrl
        } else {
            detailedList = reservedList.splice(0, maxItems)
            newUrl = reservedList.length <= 0 ? null : ''
            
            setReservedList(reservedList)        
        }

        setPokemonList({
            ...pokemonList,
            pokemons: [...pokemonList.pokemons, ...detailedList],
            nextLoadUrl: newUrl
        })   
    }

    useEffect(() => {
        setDisableButton(pokemonList.nextLoadUrl === null)
    }, [pokemonList.nextLoadUrl])

    return (
        <RenderLoadMoreButton isDisabled={disableButton} />
    )
}

const StyledLoadMoreButton = styled.button`
    display: flex;
    background-color: ${props => props.theme.pokemonCardBackgroundColor};
    border-radius: 200px 70px 70px 200px;
    width: 250px;
    height: 112px;
    gap: 1rem;
    transition: ease 0.3s;
    align-items: center;
    cursor: pointer;

    .label {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${props => props.theme.loadMoreCardColor};
    }

    &:hover {
        background-color: ${props => props.theme.loadMoreCardHoverBackgroundColor};
    }

    &:hover > div {
        color: ${props => props.theme.loadMoreCardHoverColor};
    }
`

const IconContainer = styled.div`
    width: 112px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    transition: ease 0.3s;
    color: ${props => props.theme.loadMoreIconColor};
`
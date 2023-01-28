import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { PokemonsContext } from "../../contexts/pokemons-context"
import { maxItems } from "../../variables"
import { IconContainer, StyledLoadMoreButton } from "./style"

export const LoadMoreButton = () => {

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
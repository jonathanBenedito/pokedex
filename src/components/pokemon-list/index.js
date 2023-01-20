import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { getPokemonList } from "../../services/pokemon"
import { PokemonIconTypes } from "../pokemon-icon-types"

export const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState({
        pokemons: []
    })

    async function getPokemonDetails(url) {
        const response = await fetch(url)
        return await response.json()
    }

    const RenderPokemonList = ({pokemons}) => {
        return (
            <>
                {pokemons.map(pokemon => (
                    <p>{pokemon.name}</p>
                ))}
            </>
        )
    }

    useEffect(() => {
        async function fetchList() {
            const pokemons = await getPokemonList()
            const pokemonsDetails = pokemons.results.map(async (pokemon) => {
                return await getPokemonDetails(pokemon.url)
            })
            const pokemonDetailedList = await Promise.all(pokemonsDetails)
            setPokemonList({pokemons: pokemonDetailedList})
        }
        fetchList()
    }, [])

    return (
        <Section>
            <RenderPokemonList pokemons={pokemonList.pokemons}/>
            <Link to="/" className="pokemon-card">
                <div className="image-container">
                    <img src="/images/Charizard.gif" />
                </div>
                <div className="info">
                    <p className="name">Crabominable</p>
                    <div className="icon-type-container">
                        <PokemonIconTypes typeName={'fairy'}/>
                        <PokemonIconTypes typeName={'fairy'}/>
                    </div>
                    <p className="id">#131</p>
                </div>
            </Link>
        </Section>
    )
}

const Section = styled.section`
    display: flex;

    .pokemon-card {
        display: flex;
        background-color: #E0C439;
        border-radius: 200px 70px 70px 200px;
        width: 244px;
        height: 112px;
        gap: 1rem;
    }

    .pokemon-card .image-container{
        width: 112px;
        height: 112px;
        background: url('/images/pokeball-card-background.png');
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pokemon-card .info {
        padding: 0.9rem 0.8rem 0.9rem 0;
        color: white;
    }

    .pokemon-card .info .name {
        font-weight: 600;
        font-size: 1.8rem;
        margin-bottom: 0.3rem;
    }

    .pokemon-card .info .name {
        font-weight: 600;
        font-size: 1.8rem;
        margin-bottom: 0.3rem;
    }

    .pokemon-card .info .icon-type-container {
        display: flex;
        margin-bottom: 1.6rem;
        gap: 0.7rem;
    }

    .pokemon-card .info .id {
        align-self: flex-end;
    }

`
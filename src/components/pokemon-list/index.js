import { Link } from "react-router-dom"
import styled from "styled-components"
import { PokemonIconTypes } from "../pokemon-icon-types"

export const PokemonList = () => {
    return (
        <Section>
            <Link to="/" className="pokemon-card">
                <div className="image-container">
                    <img src="" />
                </div>
                <div className="info">
                    <p className="name">Crabominable</p>
                    <div className="type-container">
                        <div className="icon">
                            <PokemonIconTypes typeName={'ice'}/>
                        </div>
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
    }

    .pokemon-card .info {
        padding: 0.9rem 0.8rem 0.9rem 0;
        color: white;
    }

    .pokemon-card .info .name {
        font-weight: 600;
        font-size: 1.8rem;
    }

    .pokemon-card .info .type-container {
        margin-bottom: 2.4rem;
    }

    .pokemon-card .info .id {
        align-self: flex-end;
    }

`
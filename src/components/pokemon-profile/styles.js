import styled from "styled-components";
import { deviceBreakpoint } from "../../variables";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        width: 100%;
        align-items: center;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    max-width: 310px;
    background: radial-gradient(
        50% 50% at 50% 50%,
        ${props => props.pokemonTypeTheme.radialColor_1} 0%, 
        ${props => props.pokemonTypeTheme.radialColor_2} 100%
    );
    border-radius: 5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: ${deviceBreakpoint.mobile}) {
        max-width: 170px;
    }
`

export const NameRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;

    .pokemon-name {
        font-weight: 700;
        font-size: 1.8rem;  
        text-transform: capitalize; 
    }

    .pokemon-id {
        font-size: 1.4rem;
    }

    @media (max-width: ${deviceBreakpoint.mobile}) {
        width: 100%;
        max-width: 210px;
        margin-top: 0.8rem;
        margin-bottom: 0.8rem;

        .pokemon-name {
            font-size: 1.2rem;
            padding: 0;
        }

        .pokemon-id {
            font-size: 1.2rem;
        }
    }
`

export const TypeRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.7rem;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        justify-content: center;
        gap: 1rem;
    }
`

export const TypeTag = styled.div`
    display: flex;
    flex-basis: 148px;
    background-color: ${props => props.typeBackgroundColor};
    color: white;
    border-radius: 5rem 2rem 2rem 5rem;

    .type-name {
        padding: 0.7rem 2rem;
        text-transform: capitalize;
    }

    @media (max-width: ${deviceBreakpoint.mobile}) {
        .type-name {
            padding: 0.3rem 1.4rem;
            font-size: 1.2rem;
        }
    }
`
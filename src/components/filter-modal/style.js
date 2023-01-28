import styled, { css } from "styled-components"

export const OverlayScreen = styled.div`
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

export const ModalWindow = styled.section`
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

export const ModalHeader = styled.header`
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

export const ModalBody = styled.div`
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

export const PokemonTypeButton = styled.li`
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

export const PokemonTypeListRow = styled.ul`
    display: flex;
    gap: 1rem 2.1rem;
    justify-content: center;
    flex-wrap: wrap;
`
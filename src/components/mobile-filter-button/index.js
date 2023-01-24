import { useState } from "react"
import styled, { css } from "styled-components"
import { deviceBreakpoint } from "../../variables"
import { FilterIcon } from "../filter-icon"

export const MobileModalFilterButton = ({setShowFilterModal}) => {
    const [typeTheme, setTypeTheme] = useState({
        color: 'white',
        icon: '/images/filter-solid.svg',  
    })

    return (
        <>
            <Button onClick={() => setShowFilterModal(true)}>        
                <FilterIcon iconTheme={typeTheme} />
            </Button>
        </>

    )
}

const Button = styled.div`
    display: none;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        display: inline;
    }
`

const OverlayScreen = styled.div`
    display: none;

    ${props => props.showModal && css `
        display: block;
        position: static !important;
        background-color: black;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
    `}
`
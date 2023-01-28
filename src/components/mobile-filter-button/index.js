import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled, { css } from "styled-components"
import { deviceBreakpoint } from "../../variables"
import { FilterIcon } from "../filter-icon"

export const MobileModalFilterButton = ({setShowFilterModal, filterTypeTheme}) => {
   
    const navigate = useLocation()

    return (
        <Button onClick={() => setShowFilterModal(true)}>        
            <FilterIcon iconTheme={filterTypeTheme} />
        </Button>
    )
}

const Button = styled.div`
    display: none;

    @media (max-width: ${deviceBreakpoint.mobile}) {
        display: inline;
    }
`
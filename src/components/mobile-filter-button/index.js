import { useState } from "react"
import styled, { css } from "styled-components"
import { deviceBreakpoint } from "../../variables"
import { FilterIcon } from "../filter-icon"

export const MobileModalFilterButton = ({setShowFilterModal, filterTypeTheme}) => {

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
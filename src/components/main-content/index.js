import styled from "styled-components"

export const MainContent = ({children}) => {
    return (
        <StyledMainContent>
            {children}
        </StyledMainContent>
    )
}

const StyledMainContent = styled.main`
    height: 100vh;
    padding: 0 2.2rem;
`
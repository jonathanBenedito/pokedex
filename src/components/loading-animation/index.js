import styled from "styled-components"

export const LoadingAnimation = () => {
    return (
        <StyledLoadingAnimation>
            <img src="/images/loading-pokeball.gif" alt="Rolling pokeball" width="128px"/>
            <h1>Loading...</h1>
        </StyledLoadingAnimation>
    )

}

const StyledLoadingAnimation = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 2.4rem
    }
`
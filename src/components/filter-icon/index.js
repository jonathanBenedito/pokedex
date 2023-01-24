import styled from "styled-components"

export const FilterIcon = ({iconTheme}) => {
    return (
        <IconContainer backgroundColor={iconTheme.color}>
            <img src={iconTheme.icon} />
        </IconContainer>
    )
}

const IconContainer = styled.div`
    background-color: ${props => props.backgroundColor};
    display: flex;
    align-items: center;
    width: 34px;
    height: 34px;
    justify-content: center;
    border-radius: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: black;
    cursor: pointer;

    img {
        width: 20px;
    }
`
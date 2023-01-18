import styled from "styled-components"

const Panel = () => {
    return (
        <Section>
            <Container/>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const Container = styled.section`
    width: 329px;
    height: 537px;
    background-color: white;
`

export { Panel }
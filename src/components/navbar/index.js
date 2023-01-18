import styled from "styled-components"

const Navbar = () => {
    return (
        <Section className="section">
            <img src="/images/pokedex-logo.png" />
            h3llo!
        </Section>
    )
}

const Section = styled.section`
    position: absolute;
    top: 0;
    background-color: blue;
    width: 100%;
    height: 50px;
`

export { Navbar }
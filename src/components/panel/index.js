import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

export const Panel = ({children}) => {

    const { theme } = useContext(ThemeContext)

    return (
        <Section theme={theme}>
            <div className="container">
                <div className="inner-border">
                    <section className="main-content">
                        {children}
                    </section>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    .container {
        width: 600px;
        height: 537px;
        background-color: ${props => props.theme.panelBackgroundColor};
        backdrop-filter: blur(10px);
        padding: 2.1rem;
        border-radius: 5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @media (max-width: 400px) {
            margin-top: 55px;
        }
    }

    .container .inner-border {
        width: 100%;
        height: 100%;
        border: 2px solid ${props => props.theme.panelInnerBorderColor};
        background-color: transparent;
        border-radius: 50px;
        padding: 4.6rem 4.8rem;
    }
`
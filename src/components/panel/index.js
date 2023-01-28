import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import { deviceBreakpoint } from "../../variables"

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
        width: 100%;
        max-width: 1268px;
        height: 537px;
        background-color: ${props => props.theme.panelBackgroundColor};
        backdrop-filter: blur(10px);
        padding: 2.1rem;
        border-radius: 5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: 0.3s ease;

        @media (max-width: 400px) {
            margin-top: 55px;
        }

        @media (max-width: ${deviceBreakpoint.mobile}) {
            height: 500px;
        }
    }

    .container .inner-border {
        width: 100%;
        height: 100%;
        border: 2px solid ${props => props.theme.panelInnerBorderColor};
        background-color: transparent;
        border-radius: 50px;
        padding: 4.6rem 4.8rem;
        transition: 0.3s ease;

        @media (max-width: ${deviceBreakpoint.mobile}) {
            padding: 2.3rem 0.4rem;
        }
    }
`
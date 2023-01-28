import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Section } from "./style"


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
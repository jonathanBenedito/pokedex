import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContent } from "../../components/main-content";
import { Navbar } from "../../components/navbar";
import { Home } from "../home";
import { PokemonDetails } from "../pokemon-details";

export const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Navbar />
            <MainContent>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/pokemon-details/:id' element={<PokemonDetails />} />
                </Routes>
            </MainContent>
        </BrowserRouter>
    )
}
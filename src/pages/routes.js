import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilterModal } from "../components/filter-modal";
import { MainContent } from "../components/main-content";
import { Navbar } from "../components/navbar";
import { Home } from "./home";
import { PokemonInfo } from "./pokemon-info";

export const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Navbar />
            <MainContent>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/pokemon-info/:id' element={<PokemonInfo />} />
                </Routes>
            </MainContent>
        </BrowserRouter>
    )
}
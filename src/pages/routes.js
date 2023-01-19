import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import {  PokemonInfo } from "./pokemon-info";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pokemon-info/:id' element={<PokemonInfo />} />
        </Routes>
    </BrowserRouter>
)
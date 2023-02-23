import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PokemonList } from "..";
import { PokemonsContext } from "../../../contexts/pokemons-context";
import { pokemonListMock } from "../../../mocks/pokemon-list";

test("Should list 10 pokemons cards", () => {
    const pokemonList = pokemonListMock;

       render(
         <BrowserRouter>
           <PokemonsContext.Provider value={{ pokemonList }}>
             <PokemonList />
           </PokemonsContext.Provider>
         </BrowserRouter>
       );
    
       const pokemonsImage = screen.getAllByRole("img", {
         name: "bulbasaur sprite",
       });
       
       expect(pokemonsImage.length).toBe(10)
})
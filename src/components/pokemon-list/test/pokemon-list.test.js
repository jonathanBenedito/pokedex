import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PokemonList } from "..";
import { PokemonsContext } from "../../../contexts/pokemons-context";
import { pokemonListMock } from "../../../mocks/pokemon-list";
import "@testing-library/jest-dom/extend-expect";
import { AddLeadingZeros } from "../../../utils";

test("Should list 10 pokemons cards", () => {
  const pokemonList = pokemonListMock;

  render(
    <BrowserRouter>
      <PokemonsContext.Provider value={{ pokemonList }}>
        <PokemonList />
      </PokemonsContext.Provider>
    </BrowserRouter>
  );

  const pokemonCards = screen.getAllByRole("link");
  expect(pokemonCards.length).toBe(10);

  // Check if the pokemons cards is rendered correctly
  pokemonListMock.pokemons.forEach((pokemon, index) => {
    const formattedId = AddLeadingZeros(pokemon.id);

    const nameElement = within(pokemonCards[index]).getByText(pokemon.name);
    const idElement = within(pokemonCards[index]).getByText(`#${formattedId}`);
    const imageElement = screen.getByRole("img", {
      name: `${pokemon.name} sprite`,
    });

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(
      pokemon.sprites.versions["generation-v"]["black-white"].animated
        .front_default
    );
    expect(nameElement).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();

    pokemon.types.forEach((pokemonType) => {
      const typeElement = within(pokemonCards[index]).getByRole("img", {
        name: `${pokemonType.type.name} icon`,
      });

      expect(typeElement).toBeInTheDocument();
    });
  });
});

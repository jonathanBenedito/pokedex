import { PokemonsProvider } from "./contexts/pokemons-context";
import { ThemeProvider } from "./contexts/theme-context";
import { AppRoutes } from "./pages/routes";
import { GlobalStyle } from "./styles/global-style";

function App() {
  
  return (
      <ThemeProvider>
        <GlobalStyle />
        <PokemonsProvider>
            <AppRoutes />
        </PokemonsProvider>
      </ThemeProvider>
  );
}

export default App;
import { useEffect, useState } from 'react';
import http from 'helpers/http';

function usePokemons(offset = 10, limit = 10) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);

  async function fetchPokemons(page = 0) {
    const pokemonsData = await http.get('', { params: { offset: page * offset, limit } });
    setPokemons(() => pokemonsData.data.results);
    setPokemonCount(pokemonsData.data.count);
  }

  useEffect(async () => {
    fetchPokemons();
  }, []);

  return { pokemons, fetchPokemons, pokemonCount };
}

export default usePokemons;

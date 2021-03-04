import { useEffect, useState } from 'react';
import http from 'helpers/http';

function usePokemons(offset = 10, limit = 10) {
  const [pokemons, setPokemons] = useState([]);

  async function fetchPokemons(page = 0) {
    console.log(page);
    const pokemonsData = await http.get('', { params: { offset: page * offset, limit } });
    setPokemons(() => pokemonsData.data.results);
  }

  useEffect(async () => {
    fetchPokemons();
  }, []);

  return { pokemons, fetchPokemons };
}

export default usePokemons;

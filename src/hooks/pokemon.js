import { useEffect, useState } from 'react';
import http from 'helpers/http';

function usePokemon(id) {
  const [pokemon, setPokemon] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(async () => {
    setFetching(true);
    const pokemonData = await http.get(`/${id}`);
    setPokemon(() => pokemonData.data);
    setFetching(false);
  }, [setPokemon]);

  return { pokemon, fetching };
}

export default usePokemon;

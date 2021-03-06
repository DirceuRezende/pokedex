import { useEffect, useState } from 'react';
import http from 'helpers/http';
import { useMounted } from 'hooks';

function usePokemon(id) {
  const [pokemon, setPokemon] = useState([]);
  const [fetching, setFetching] = useState(false);
  const mounted = useMounted();

  useEffect(async () => {
    setFetching(true);
    const pokemonData = await http.get(`/pokemon/${id}`);
    if (mounted.current) {
      setPokemon(() => pokemonData.data);
      setFetching(false);
    }
  }, [setPokemon]);

  return { pokemon, fetching };
}

export default usePokemon;

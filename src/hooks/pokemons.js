import { useEffect, useState } from 'react';
import http from 'helpers/http';
import { useMounted } from 'hooks';

function usePokemons(offset = 10, limit = 10) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [types, setTypes] = useState([]);
  const mounted = useMounted();

  async function fetchPokemons(page = 0) {
    const pokemonsData = await http.get('/pokemon', { params: { offset: page * offset, limit } });
    if (mounted.current) {
      setPokemons(() => pokemonsData.data.results);
      setPokemonCount(pokemonsData.data.count);
    }
  }

  async function fetchTypes() {
    const pokemonsType = await http.get('/type');
    const typesArray = [{ name: 'all', id: -1 }].concat(pokemonsType.data.results.map((type) => ({ name: type.name, id: type.url.split('/').slice(0, -1).pop() })));
    if (mounted.current) {
      setTypes(typesArray);
    }
  }

  async function fetchPokemonsByType(type = 0, page = 0) {
    const pokemonsData = await http.get(`/type/${type}`);
    const pokemonsArray = [];

    for (let i = page * offset; i < ((page * offset) + 10); i += 1) {
      if (pokemonsData.data.pokemon[i] !== undefined) {
        pokemonsArray.push({
          name: pokemonsData.data.pokemon[i].pokemon.name,
          url: pokemonsData.data.pokemon[i].pokemon.url,
        });
      }
    }
    if (mounted.current) {
      setPokemons(() => pokemonsArray);
      setPokemonCount(pokemonsData.data.pokemon.length);
    }
  }

  useEffect(async () => {
    fetchPokemons();
    fetchTypes();
  }, []);

  return {
    pokemons, fetchPokemons, fetchPokemonsByType, pokemonCount, types,
  };
}

export default usePokemons;

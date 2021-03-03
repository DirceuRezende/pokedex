import http from 'helpers/http';

export async function getAllPokemons(offset = 0, limit = 10) {
  const pokemons = await http.get('', { params: { offset, limit } });
  return pokemons.data;
}

export async function getPokemon(id) {
  const pokemon = await http.get(`/${id}`);
  return pokemon.data;
}

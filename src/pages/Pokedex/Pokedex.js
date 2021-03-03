import React, { useEffect, useState } from 'react';
import { PageTitle } from 'shared';
import { getAllPokemons } from 'services/pokemon';
import PokemonCard from 'components/PokemonCard';
import { PokemonContainer, Wrapper } from './Pokedex.style';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const pokemonsData = await getAllPokemons();
    setPokemons(pokemonsData.results);
  }, [getAllPokemons, setPokemons]);

  return (
    <Wrapper>
      <PageTitle>Pokemons</PageTitle>
      <PokemonContainer>
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </PokemonContainer>
    </Wrapper>
  );
}

export default Pokedex;

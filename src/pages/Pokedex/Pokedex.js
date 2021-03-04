/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { PageTitle } from 'shared';
import PokemonCard from 'components/PokemonCard';
import { usePokemons, usePagination } from 'hooks';
import { PokemonContainer, Wrapper } from './Pokedex.style';

function Pokedex() {
  const { pokemons, fetchPokemons } = usePokemons();
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    fetchPokemons(actualPage);
  }, [actualPage]);
  return (
    <Wrapper>
      <PageTitle>Pokemons</PageTitle>
      <PokemonContainer>
        {pokemons?.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
      </PokemonContainer>
      {Array(5).fill('').map((_, index) => <button type="button" key={2 * index} disabled={(actualPage === index + 1)} onClick={() => setActualPage(index + 1)}>{index}</button>)}
    </Wrapper>
  );
}

export default Pokedex;

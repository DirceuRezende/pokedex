/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { PageTitle } from 'shared';
import PokemonCard from 'components/PokemonCard';
import Pagination from 'components/Pagination';
import { usePokemons, usePagination } from 'hooks';
import { PokemonContainer, Wrapper } from './Pokedex.style';

function Pokedex() {
  const { pokemons, fetchPokemons, pokemonCount } = usePokemons();
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    fetchPokemons(actualPage - 1);
  }, [actualPage]);
  return (
    <Wrapper>
      <PageTitle>Pokemons</PageTitle>
      <PokemonContainer>
        {pokemons?.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
      </PokemonContainer>
      <Pagination total={pokemonCount} currentPage={actualPage} setCurrentPage={setActualPage} />
    </Wrapper>
  );
}

export default Pokedex;

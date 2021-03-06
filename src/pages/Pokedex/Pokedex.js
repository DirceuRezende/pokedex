/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PageTitle } from 'shared';
import PokemonCard from 'components/PokemonCard';
import Pagination from 'components/Pagination';
import { usePokemons, usePagination } from 'hooks';
import {
  PokemonWrapper, TypeSelect, HeaderWrapper, Wrapper,
} from './Pokedex.style';

function Pokedex() {
  const {
    pokemons, fetchPokemons, fetchPokemonsByType, pokemonCount, types,
  } = usePokemons();
  const { currentPage, changePage } = usePagination();
  const [currentType, setCurrentType] = useState(-1);
  const history = useHistory();

  useEffect(() => {
    if (+currentType === -1) {
      fetchPokemons(currentPage - 1);
    } else if ((+currentPage - 1) === -1) {
      fetchPokemonsByType(currentType, 1);
    } else {
      fetchPokemonsByType(currentType, currentPage - 1);
    }
  }, [currentPage]);

  const handleChange = async (e) => {
    const typeId = e.target.value;
    if (+typeId === -1) {
      await fetchPokemons(currentPage - 1);
      setCurrentType(+typeId);
    } else {
      await fetchPokemonsByType(+typeId);
      setCurrentType(+typeId);
    }
    history.push({ pathname: '/', search: '?page=1' });
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <PageTitle>Pokemons</PageTitle>
        <TypeSelect onChange={handleChange}>
          {types?.map((type) => (<option key={type.id} value={type.id}>{type.name}</option>))}
        </TypeSelect>
      </HeaderWrapper>

      <PokemonWrapper>
        {pokemons?.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
      </PokemonWrapper>
      <Pagination total={pokemonCount} currentPage={currentPage} setCurrentPage={changePage} />
    </Wrapper>
  );
}

export default Pokedex;

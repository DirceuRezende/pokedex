import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form, Header, LogoPokemon, SearchInput, SearchButton,
} from './Header.style';

function HeaderContainer() {
  const [search, setSearch] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setSearch('');
    history.push(`/pokemon/${search.toLowerCase()}`);
  }

  return (
    <Header>
      <LogoPokemon>Pokédex</LogoPokemon>
      <Form onSubmit={handleSubmit}>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
        <SearchButton />
      </Form>
    </Header>
  );
}

export default HeaderContainer;

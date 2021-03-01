import React from 'react';
import { ReactComponent as Search } from 'assets/search-black-18dp.svg';
import {
  Form, Header, LogoPokemon, SearchInput,
} from './Header.style';

function HeaderContainer() {
  return (
    <Header>
      <LogoPokemon>Pokédex</LogoPokemon>
      <Form>
        <SearchInput />
        <button type="submit">
          <Search />
        </button>
      </Form>
    </Header>
  );
}

export default HeaderContainer;

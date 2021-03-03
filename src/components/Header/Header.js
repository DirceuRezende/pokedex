import React from 'react';
import {
  Form, Header, LogoPokemon, SearchInput, SearchButton,
} from './Header.style';

function HeaderContainer() {
  return (
    <Header>
      <LogoPokemon>Pokédex</LogoPokemon>
      <Form>
        <SearchInput />
        <SearchButton />
      </Form>
    </Header>
  );
}

export default HeaderContainer;

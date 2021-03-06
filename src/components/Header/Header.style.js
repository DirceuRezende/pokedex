import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from 'assets/search-black-18dp.svg';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  align-items: center;
  justify-content: space-evenly;
  background-color: #CC0000;
  display: flex;
  height: 80px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: stretch;
`;

export const LogoPokemon = styled(Link).attrs({
  to: { pathname: '/', search: '?page=1' },
})`
  color: #FFDE00;
  margin-right: 2em;
  font-family: 'Pokemon';
  font-size: 48px;
  text-shadow: 5px 5px 0 #3762ac,
     -2px -2px 0 #3762ac,
      2px -2px 0 #3762ac,
      -2px 2px 0 #3762ac,
       2px 2px 0 #3762ac;
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  border-radius: 5px 0 0 5px;
  box-shadow: 1px 1px 1px #000;
  border: 1px -2 1px 1px #000 solid;
  font-family: 'Pokemon';
  width: 300px;
  height: 40%;
  padding-left: 10px;
  padding-right: 10px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 60px;
`;

export const SearchButton = () => (<Button><Search /></Button>);

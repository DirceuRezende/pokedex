import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  justify-content: space-evenly;
  background-color: #CC0000;
  display: flex;
  height: 80px;
  width: 100vw;
`;

export const Form = styled.form`
  display: flex;
`;

export const LogoPokemon = styled.h1`
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
  border-radius: 5px;
  box-shadow: 1px 1px 1px #000;
  border: 1px #000 solid;
  font-family: 'Pokemon';
  width: 300px;
  height: 40%;
  padding-left: 10px;
  padding-right: 10px;
  &:focus {
    outline: none !important;
    border: 2px solid #B3A125;
    box-shadow: 1px 1px 1px #B3A125;
  }
`;

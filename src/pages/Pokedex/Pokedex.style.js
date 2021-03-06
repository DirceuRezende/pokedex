import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: flex-start;
  height: calc(100vh - 160px);
`;

export const PokemonWrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  margin-top: 25px;
  width: 1024px;
  flex-wrap: wrap;
  padding: 10px;
`;

export const TypeSelect = styled.select`
  border-radius: 5px 0 0 5px;
  box-shadow: 1px 1px 1px #000;
  border: 1px -2 1px 1px #000 solid;
  font-family: 'Pokemon';
  width: 300px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: capitalize;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  width: 1024px;
  flex-wrap: wrap;
  padding: 10px;
`;

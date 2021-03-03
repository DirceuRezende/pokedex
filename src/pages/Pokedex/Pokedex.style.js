import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: flex-start;
  height: calc(100vh - 160px);
`;

export const PokemonContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  margin-top: 25px;
  width: 1024px;
  flex-wrap: wrap;
  padding: 10px;
`;

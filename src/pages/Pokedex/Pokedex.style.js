import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: flex-start;
  height: calc(100vh - 160px);
  width: 100%;
`;

export const PokemonWrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  margin-top: 25px;
  width: 1024px;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 546px;
  }
  @media (max-width: 425px) {
    width: 390px;
  }
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
  @media (max-width: 425px) {
    margin-top: 16px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  width: 1024px;
  flex-wrap: wrap;
  padding: 10px;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 546px;
  }
  @media (max-width: 425px) {
    width: 370px;
  }
`;

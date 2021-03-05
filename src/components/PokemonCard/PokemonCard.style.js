import styled from 'styled-components';

const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const Card = styled.div`
  align-items: center;
  border: 1px solid #aaa;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  justify-content: center;
  margin: 10px;
  height: 400px;
  width: 400px;
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    box-shadow:  0 0 0 #000;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-family: 'Pokemon';
  text-transform: capitalize;
`;

export const CardFooter = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  margin-top: 5px;
  justify-content: center;
`;

export const Type = styled.h6`
  text-transform: capitalize;
  color: #efefef;
  font-weight: bold;
  padding: 10px;
  min-width: 10px;
  min-height: 10px;
  border: 1px solid #000;
  border-radius: 20%;
  margin: 10px;
  background-color: ${({ type }) => colours[type]};
`;

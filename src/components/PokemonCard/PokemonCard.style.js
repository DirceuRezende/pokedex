import styled from 'styled-components';

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
  padding: 10px;
  min-width: 10px;
  min-height: 10px;
`;

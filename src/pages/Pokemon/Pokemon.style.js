import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.main`
  margin-top: 18px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: flex-start;
  height: calc(100vh - 160px);
  width: 100%;
`;

export const PokemonWrapper = styled.div`
  display: flex;
  justify-content: center;
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

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 510px;
  background-color: #0d6efd;
  width: ${({ value }) => value * 2}px;
  border-radius: .25rem;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 546px;
  }
  @media (max-width: 425px) {
    width: 390px;
  }
  height: 15px;
`;

export const Stat = styled.ul`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > li {
    margin-top: 10px;
  }

  & h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`;

// eslint-disable-next-line react/prop-types
export const StatProgressBar = ({ stat }) => (
  <>
    <Progress>
      <ProgressBar value={stat} />
    </Progress>
  </>
);

export const Progress = styled.div`
  border-radius: 25%;
  border: solid 1px #000;
  background-color: #e9ecef;
  border-radius: .25rem;
  width: 510px;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 546px;
  }
  @media (max-width: 425px) {
    width: 390px;
  }
  height: 17px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFrontBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

export const FlipCardFront = styled(FlipCardFrontBack)`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

export const FlipCardBack = styled(FlipCardFrontBack)`
  transform: rotateY(180deg);
`;

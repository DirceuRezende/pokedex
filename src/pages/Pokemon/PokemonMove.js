import React from 'react';
import { useMove } from 'hooks';
import { MovesContainerContent } from './Pokemon.style';

// eslint-disable-next-line react/prop-types
function PokemonMove({ url }) {
  const id = /\/(\d+)\//.exec(url)[1];
  const { move } = useMove(id);
  return (
    <>
      <MovesContainerContent>{ move.name }</MovesContainerContent>
      <MovesContainerContent>
        { move?.type?.name }
      </MovesContainerContent>
      <MovesContainerContent>{ move.power }</MovesContainerContent>
      <MovesContainerContent>{ move.accuracy }</MovesContainerContent>
      <MovesContainerContent>{ move.pp }</MovesContainerContent>
      <MovesContainerContent>{ move?.flavor_text_entries?.filter((flavor) => flavor.language.name === 'en')?.[0].flavor_text }</MovesContainerContent>
    </>
  );
}

export default PokemonMove;

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import t from 'prop-types';
import { Spinner, FetchingImage } from 'shared';
import { useHistory } from 'react-router-dom';
import { usePokemon } from 'hooks';
import {
  Card, CardFooter, Title, Type,
} from './PokemonCard.style';

function PokemonCard({ pokemon }) {
  const history = useHistory();
  const id = pokemon.url.split('/').slice(0, -1).pop();
  const { pokemon: pokemonInfo, fetching } = usePokemon(id);

  const handleClick = () => {
    history.push(`/pokemon/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      {fetching && <Spinner />}
      {!fetching && (
        <>
          <FetchingImage
            image={Image}
            url={pokemonInfo?.sprites?.front_default}
            width={250}
            height={250}
          />
          <Title>{pokemonInfo?.name}</Title>
          <CardFooter>
            {pokemonInfo?.types?.map((type) => (
              <Type key={type.slot} type={type.type.name}>{type.type.name}</Type>
            ))}
          </CardFooter>
        </>
      )}
    </Card>

  );
}

PokemonCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: t.object.isRequired,
};

export default PokemonCard;

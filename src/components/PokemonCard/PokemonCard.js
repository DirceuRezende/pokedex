import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import t from 'prop-types';
import { getPokemon } from 'services/pokemon';
import { Spinner } from 'shared';
import {
  Card, CardFooter, Title, Type, Image, ImageLoad,
} from './PokemonCard.style';

function PokemonCard({ pokemon }) {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const id = pokemon.url.split('/').slice(0, -1).pop();
    const pokemonData = await getPokemon(id);
    setLoading(false);
    setPokemonInfo(() => pokemonData);
  }, []);
  return (
    <Card>
      {loading && <Spinner />}
      {!loading && (
        <>
          <ImageLoad image={Image} url={pokemonInfo?.sprites?.front_default} />
          {/* <Image src={pokemonInfo?.sprites?.front_default} /> */}
          <Title>{pokemonInfo?.name}</Title>
          <CardFooter>
            {pokemonInfo?.types?.map((type) => (
              <Type key={type.slot}>{type.type.name}</Type>
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

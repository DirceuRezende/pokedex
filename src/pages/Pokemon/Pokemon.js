import React from 'react';
import { useParams } from 'react-router-dom';
import { FetchingImage, PageTitle, Spinner } from 'shared';
import { usePokemon } from 'hooks';
import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  PokemonWrapper,
  Stat,
  StatProgressBar,
  Wrapper,
} from './Pokemon.style';

function Pokemon() {
  const { id } = useParams();
  const { pokemon, fetching } = usePokemon(id);

  return (
    <Wrapper>
      <PageTitle>{pokemon.name}</PageTitle>
      {fetching
        ? <Spinner />
        : (
          <PokemonWrapper>
            <FlipCard>
              <FlipCardInner>
                <FlipCardFront>
                  <FetchingImage
                    url={pokemon?.sprites?.front_default}
                    width={298}
                    height={198}
                  />
                </FlipCardFront>
                <FlipCardBack>
                  <FetchingImage
                    url={pokemon?.sprites?.front_shiny}
                    width={298}
                    height={198}
                  />
                </FlipCardBack>
              </FlipCardInner>
            </FlipCard>

            <Stat>
              { pokemon.stats?.map((stat) => (
                <li key={stat.stat.name}>
                  <h3>
                    {stat.stat.name}
                  </h3>

                  <StatProgressBar stat={stat.base_stat} />
                </li>
              )) }
            </Stat>
          </PokemonWrapper>
        )}
    </Wrapper>

  );
}

export default Pokemon;

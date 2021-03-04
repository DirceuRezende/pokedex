import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import t from 'prop-types';
import styled from 'styled-components';
import { Spinner } from 'shared';

const Image = styled.img`
  height: 250px;
  width: 250px;
  display: ${({ fetching }) => (fetching ? 'none' : 'inline')};
`;

const Container = styled.div`
  align-items: 'center';
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: 'flex';
  justify-content: 'center';
  flex-direction: 'column';
  display: ${({ fetching }) => (fetching ? 'none' : 'inline')};
`;

export const FetchingImage = ({ url, width, height }) => {
  const [fetching, useLoading] = useState(true);
  const handleOnLoad = () => { useLoading(false); };
  return (
    <Container width={width} height={height}>
      {fetching && <Spinner />}
      <Image fetching={fetching} src={url} onLoad={() => handleOnLoad()} />
    </Container>
  );
};

FetchingImage.defaultProps = {
  url: '',
};

FetchingImage.propTypes = {
  url: t.string,
  width: t.number.isRequired,
  height: t.number.isRequired,
};

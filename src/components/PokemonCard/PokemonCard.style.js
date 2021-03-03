import React, { useState } from 'react';
import { Spinner } from 'shared';
import styled from 'styled-components';

export const Card = styled.div`
  align-items: center;
  border: 1px solid #aaa;
  background-color: #589698;
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  justify-content: center;
  margin: 10px;
  height: 400px;
  width: 400px;
`;

export const Image = styled.img`
  height: 250px;
  width: 250px;
  display: ${({ loading }) => (loading ? 'none' : 'inline')};
`;

// eslint-disable-next-line react/prop-types
export const ImageLoad = ({ url }) => {
  const [loading, useLoading] = useState(true);
  const handleOnLoad = () => { useLoading(false); };
  return (
    <div style={{
      alignItems: 'center', width: '250px', height: '250px', display: 'flex', justifyContent: 'center', flexDirection: 'column',
    }}
    >
      {loading && <Spinner />}
      <Image loading={loading} src={url} onLoad={() => handleOnLoad()} />

    </div>
  );
};

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

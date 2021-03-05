import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: center;
  height: 50px;
  width: 1024px;
`;

export const Button = styled.button`
  cursor: ${({ cursor, disabled }) => (cursor && !disabled ? 'pointer' : 'default')};
  margin: 0 2px;
  width: 50px;
`;

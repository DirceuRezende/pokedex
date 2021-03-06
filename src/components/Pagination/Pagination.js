/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Wrapper } from './Pagination.style';

function Pagination({ total, currentPage, setCurrentPage }) {
  const totalPage = Math.round(total / 10);
  return (
    <Wrapper>
      <Button type="button" cursor="true" disabled={(currentPage === 1)} onClick={() => setCurrentPage(1)}>{'<<'}</Button>
      <Button type="button" cursor="true" disabled={(currentPage === 1)} onClick={() => setCurrentPage(currentPage + -1)}>{'<'}</Button>
      <Button type="button">{currentPage}</Button>
      <Button type="button" cursor="true" disabled={(currentPage === totalPage)} onClick={() => setCurrentPage(currentPage + 1)}>{'>'}</Button>
      <Button type="button" cursor="true" disabled={(currentPage === totalPage)} onClick={() => setCurrentPage(totalPage)}>{'>>'}</Button>
    </Wrapper>
  );
}

export default Pagination;

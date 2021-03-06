/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';
import { useMounted } from 'hooks';

function usePagination() {
  const history = useHistory();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const mounted = useMounted();
  const { search } = location;
  function getCurrentPage() {
    const queryStringParams = qs.parse(location.search);
    const { page } = queryStringParams;

    if (page !== currentPage && mounted.current && +page >= 1) {
      setCurrentPage(+page);
    }
  }
  useEffect(() => {
    getCurrentPage();
  }, [search]);

  useEffect(() => {
    const queryStringParams = qs.parse(location.search);
    history.push({ search: qs.stringify({ ...queryStringParams, page: currentPage }) });
  }, [currentPage]);

  useEffect(() => {
    const queryStringParams = qs.parse(location.search);
    history.push({ search: qs.stringify({ ...queryStringParams, page: currentPage }) });
  }, [currentPage]);

  function changePage(page) {
    if (mounted.current) {
      setCurrentPage(page);
    }
  }

  return { currentPage, changePage };
}

export default usePagination;

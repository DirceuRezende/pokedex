/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';

function usePagination() {
  const history = useHistory();
  const location = useLocation();
  const [actualPage, setActualPage] = useState(getActualPage() || 1);

  function getActualPage() {
    const queryStringParams = qs.parse(location.search);
    const { page } = queryStringParams;
    return page ? +page : undefined;
  }

  useEffect(() => {
    const queryStringParams = qs.parse(location.search);

    history.push({ search: qs.stringify({ ...queryStringParams, page: actualPage }) });
  }, [actualPage]);

  return { actualPage, setActualPage };
}

export default usePagination;

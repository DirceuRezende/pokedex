import { useEffect, useState } from 'react';
import http from 'helpers/http';
import { useMounted } from 'hooks';

function useMove(id) {
  const [move, setMove] = useState([]);
  const [fetching, setFetching] = useState(false);
  const mounted = useMounted();

  useEffect(async () => {
    setFetching(true);
    const moveData = await http.get(`/move/${id}`);
    if (mounted.current) {
      setMove(() => moveData.data);
      setFetching(false);
    }
  }, [id, setMove]);

  return { move, fetching };
}

export default useMove;

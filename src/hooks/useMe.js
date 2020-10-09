import { useQuery } from 'react-query';
import axios from 'axios';

export default function useMe() {
  return useQuery('userData', () =>
    axios
      .get(`/users/me`)
      .then((res) => res.data.data.doc)
      .catch((err) => err.res)
  );
}

import { useQuery } from 'react-query';
import axios from 'axios';

export default function useTours() {
  return useQuery('tours', () =>
    axios.get('/tours').then((res) => res.data.data.doc)
  );
}

import axios from 'axios';
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

export default function useLogin() {
  const history = useHistory();
  const { login } = useContext(AuthContext);

  return useMutation(
    (data) => axios.post(`/users/login`, data).then((res) => res.data),
    {
      onSuccess: (data, variables) => {
        login(data);
        history.push('/');
      },
    }
  );
}

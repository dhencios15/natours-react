import axios from 'axios';
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

export default function useSignUp() {
  const history = useHistory();
  const { login } = useContext(AuthContext);

  return useMutation(
    (data) => axios.post(`/users/signup`, data).then((res) => res.data),
    {
      onSuccess: (data, variables) => {
        login(data);
        history.push('/');
        console.log('DATA', data);
        console.log('VALUES', variables);
      },
    }
  );
}

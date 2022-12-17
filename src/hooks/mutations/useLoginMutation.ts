import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../../services/api';
import type { LoginBody } from '../../types';

export function useLoginMutation(data: LoginBody) {
  const navigate = useNavigate();

  const { isLoading, isError, mutate } = useMutation(() => requestLogin(data), {
    onSuccess: (auth) => {
      localStorage.setItem('refresh-token', JSON.stringify(auth.refreshToken));
      navigate('/entradas');
    },
  });

  return { isLoading, isError, mutate };
}

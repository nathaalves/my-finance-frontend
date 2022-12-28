import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../../services/api';
import type { LoginBody } from '../../types';

export function useLoginMutation(data: LoginBody) {
  const navigate = useNavigate();

  const { isLoading, isError, mutate } = useMutation(() => requestLogin(data), {
    onSuccess: () => {
      navigate('/entradas');
    },
  });

  return { isLoading, isError, mutate };
}

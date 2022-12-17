import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { requestRegistration } from '../../services/api';
import type { SignUpBody, SignUpResponseError } from '../../types';

export function useRegistrationMutation(data: SignUpBody) {
  const navigate = useNavigate();

  const { isLoading, isError, error, mutate } = useMutation<
    void,
    AxiosError<SignUpResponseError>
  >(() => requestRegistration(data), {
    onSuccess: (auth) => {
      navigate('/login');
    },
  });

  return { isLoading, isError, mutate, error };
}

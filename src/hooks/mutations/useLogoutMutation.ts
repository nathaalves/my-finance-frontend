import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { requestLogout } from '../../services/api';

export function useLogoutMutation() {
  const navigate = useNavigate();

  const { mutate } = useMutation(requestLogout, {
    onSuccess: () => {
      navigate('/login');
    },
    onError: () => {
      console.log('erro ao fazer logout');
    },
  });

  return { mutate };
}

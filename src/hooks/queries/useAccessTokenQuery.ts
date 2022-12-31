import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { requestAccessToken, instance } from '../../services/api';

export function useAccessTokenQuery() {
  const navigate = useNavigate();
  const { isSuccess } = useQuery('token', requestAccessToken, {
    onSuccess: (auth) => {
      instance.defaults.headers.Authorization = `Bearer ${auth.accessToken}`;
    },
    onError: () => {
      navigate('/login');
    },
    retry: false,
    staleTime: Infinity,
  });
  return { isSuccess };
}

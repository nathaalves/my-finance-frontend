import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { requestContent } from '../../services/api';

export function useContentQuery() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { data: content, isSuccess } = useQuery('content', requestContent, {
    onSuccess: () => {
      if (pathname === '/') {
        navigate('/entradas');
      }
    },
    onError: () => {
      navigate('/login');
    },
    staleTime: Infinity,
  });

  return { content, isSuccess };
}

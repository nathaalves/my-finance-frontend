import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { requestContent } from '../../services/api';

export function useContent() {
  const navigate = useNavigate();

  const { data: content, isSuccess } = useQuery('content', requestContent, {
    onSuccess: () => {
      navigate('/entradas');
    },
    onError: () => {
      navigate('/login');
    },
    staleTime: Infinity,
  });

  return { content, isSuccess };
}

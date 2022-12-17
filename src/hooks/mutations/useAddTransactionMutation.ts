import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addTransaction } from '../../services/api';
import { TransactionBody } from '../../types';

export function useAddTransactionMutation(data: TransactionBody) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => addTransaction(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('content');
      navigate(-1);
    },
  });
  return { mutate };
}

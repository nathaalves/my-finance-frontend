import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { updateTransaction } from '../../services/api';
import { TransactionBody } from '../../types';

export function useUpdateTransactionMutation(
  id: string,
  body: TransactionBody
) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => updateTransaction(id, body), {
    onSuccess: () => {
      queryClient.invalidateQueries('content');
      navigate(-1);
    },
  });
  return { mutate };
}

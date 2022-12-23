import { useMutation, useQueryClient } from 'react-query';
import { deleteTransaction } from '../../services/api';

export function useDeleteTransactionMutation(id: string) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => deleteTransaction(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('content');
    },
  });
  return { mutate };
}

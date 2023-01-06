import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { updateTransaction } from '../../services/api';
import { SchemaResponseError, TransactionBody } from '../../types';

export function useUpdateTransactionMutation(
  id: string,
  body: TransactionBody
) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, error, mutate } = useMutation<
    void,
    AxiosError<SchemaResponseError>
  >(() => updateTransaction(id, body), {
    onSuccess: () => {
      queryClient.invalidateQueries('content');
      navigate(-1);
    },
  });
  return { isLoading, isError, error, mutate };
}

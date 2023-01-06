import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addTransaction } from '../../services/api';
import { SchemaResponseError, TransactionBody } from '../../types';

export function useAddTransactionMutation(data: TransactionBody) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, error, mutate } = useMutation<
    void,
    AxiosError<SchemaResponseError>
  >(() => addTransaction(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('content');
      navigate(-1);
    },
  });

  return { isLoading, isError, error, mutate };
}

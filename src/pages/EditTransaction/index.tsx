import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUpdateTransactionMutation } from '../../hooks/mutations/useUpdateTransactionMutation';
import { HandleTransaction } from '../../templates/HandleTransaction';

export function EditTransaction() {
  const [searchParams, _setSearchParam] = useSearchParams();

  const [form, setForm] = useState({
    value: Number(searchParams.get('value')) as number,
    description: searchParams.get('description') as string,
    categoryId: searchParams.get('categoryId') as string,
    date: new Date(searchParams.get('date') as string),
    note: searchParams.get('note') as string,
  });

  const id = searchParams.get('id') as string;

  const { isLoading, isError, error, mutate } = useUpdateTransactionMutation(
    id,
    form
  );

  return (
    <HandleTransaction
      form={form}
      setForm={setForm}
      isLoading={isLoading}
      isError={isError}
      error={error}
      mutate={mutate}
    />
  );
}

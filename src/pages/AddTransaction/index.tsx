import { useState } from 'react';
import { useAddTransactionMutation } from '../../hooks/mutations/useAddTransactionMutation';
import { HandleTransaction } from '../../templates/HandleTransaction';

export function AddTransaction() {
  const [form, setForm] = useState({
    value: 0,
    description: '',
    categoryId: '',
    date: new Date(),
    note: '',
  });

  const { mutate } = useAddTransactionMutation(form);

  return <HandleTransaction form={form} setForm={setForm} mutate={mutate} />;
}

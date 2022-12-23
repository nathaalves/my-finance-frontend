import type { TransactionBody } from '../../types/transactionTypes';
import { instance } from './instance';

export async function addTransaction(body: TransactionBody): Promise<void> {
  await instance.post('/transaction/create', body);
}

export async function deleteTransaction(id: string): Promise<void> {
  await instance.delete(`/transaction/delete/${id}`);
}

export async function updateTransaction(
  id: string,
  body: TransactionBody
): Promise<void> {
  await instance.put(`/transaction/update/${id}`, body);
}

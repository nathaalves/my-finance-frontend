import type { TransactionBody } from '../../types/transactionTypes';
import { instance } from './instance';

export async function addTransaction(body: TransactionBody): Promise<void> {
  await instance.post('/transaction/create', body);
}

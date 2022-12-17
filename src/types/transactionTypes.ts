export type TransactionBody = {
  value: number;
  description: string;
  note: string;
  date: Date;
  categoryId: string;
};

export type Transaction = Omit<TransactionBody, 'categoryId'>;

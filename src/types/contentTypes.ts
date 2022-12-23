import { TransactionType } from './transactionTypes';

export type Category = {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  transactions: TransactionType[];
  sum: number;
  count: number;
};

export type ContentTypes = 'inflow' | 'outflow';

export type Content = {
  [key in ContentTypes]: {
    categories: Category[];
    totalValue: number;
    transactionsAmount: number;
  };
};

import { Transaction } from './transactionTypes';

export type Category = {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  transactions: Transaction[];
  sum: number;
  count: number;
};

export type ContentTypes = 'inflow' | 'outflow';

export type Content = {
  [key in ContentTypes]: {
    categories: Category[];
    total: number;
  };
};

import { createContext } from 'react';

export type Transaction = {
  id: string;
  value: number;
  description: string;
  date: Date;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  transactions: Transaction[];
  sum: number;
  count: number;
};

export type Content = {
  inflow: {
    categories: Category[];
    total: number;
  };
  outflow: {
    categories: Category[];
    total: number;
  };
};

export type ContentContextType = {
  content: Content | null;
  setContent: React.Dispatch<React.SetStateAction<Content | null>>;
};

const ContentContext = createContext<ContentContextType | null>(null);

export { ContentContext };

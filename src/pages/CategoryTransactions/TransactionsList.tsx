import { useState } from 'react';
import styled from 'styled-components';
import type { TransactionType } from '../../types';
import { Transaction } from './Transaction';

type TransactionsListProps = {
  transactions: TransactionType[] | undefined;
};

export function TransactionsList({ transactions }: TransactionsListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <Container>
      {transactions?.map((transaction) => (
        <div key={transaction.id} onClick={() => setSelectedId(transaction.id)}>
          <Transaction {...transaction} selectedId={selectedId} />
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  overflow-y: scroll;
  padding-top: 6px;
`;

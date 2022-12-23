import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useContentQuery } from '../../hooks/queries/useContentQuery';
import { TransactionsList } from './TransactionsList';
import { Header } from './Header';

export function CategoryTransactions() {
  const { categoryType, categoryId } = useParams();
  const { content } = useContentQuery();

  const categories =
    categoryType === 'entradas'
      ? content?.inflow.categories
      : content?.outflow.categories;

  const category = categories?.find((category) => category.id === categoryId);

  return (
    <Container>
      <Header name={category?.name} value={category?.sum} />
      <TransactionsList transactions={category?.transactions} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  padding: 0 16px;
  padding-bottom: 30px;
`;

import { PieChart } from './PieChart';
import styled from 'styled-components';
import { formatMoney } from '../../../../utils/formatMoney';
import { useLocation } from 'react-router-dom';
import { useContentQuery } from '../../../../hooks/queries/useContentQuery';
import { Text } from '../../../../components/Text';
import { AddButton } from './AddButton';

export function ChartContainer() {
  const { pathname } = useLocation();
  const { content } = useContentQuery();

  const categoryType =
    pathname === '/entradas' ? content?.inflow : content?.outflow;
  return (
    <Container>
      <PieChart />
      <Total bold>R$ {formatMoney(categoryType?.totalValue || 0)}</Total>
      <AddButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  background: #fcfcfc;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.color.secondary};

  position: relative;
`;

const Total = styled(Text)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

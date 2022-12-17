import styled from 'styled-components';
import { DynamicIcon, Title } from '../../components';
import { useContentQuery } from '../../hooks/queries/useContentQuery';
import { formatMoney } from '../../utils/formatMoney';

export function Balance() {
  const { content } = useContentQuery();

  const balance =
    (content?.inflow.totalValue || 0) - (content?.outflow.totalValue || 0);

  return (
    <Container>
      <TitleContainer>
        <DynamicIcon name="MdAssessment" />
        <Title fontSize="xl" bold>
          Balanço
        </Title>
      </TitleContainer>
      <Title fontSize="xl" bold>
        R$ {formatMoney(balance)}
      </Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: ${({ theme }) => theme.text.size['2xl']};
    color: #fff;
  }
`;

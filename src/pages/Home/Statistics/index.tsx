import styled from 'styled-components';
import { CategoryStatistics } from './CategoryStatistics';
import { Text } from '../../../components/Text';
import { useLocation } from 'react-router-dom';
import { formatMoney } from '../../../utils/formatMoney';
import { useContentQuery } from '../../../hooks/queries/useContentQuery';
import { ChartContainer } from './Chart';

export function Statistics() {
  const { pathname } = useLocation();
  const { content } = useContentQuery();

  const categoryType =
    pathname === '/entradas' ? content?.inflow : content?.outflow;

  return (
    <>
      <ChartContainer />
      <CategoriesContainer>
        <Text fontSize="xl" bold>
          Categorias
        </Text>
        {categoryType?.transactionsAmount ? (
          <CategoriesList>
            {categoryType?.categories.map((category) => {
              return (
                <CategoryStatistics
                  key={category.id}
                  icon={category.icon}
                  color={category.iconColor}
                  category={category.name}
                  value={formatMoney(category.sum)}
                  percentage={
                    (category.sum / (categoryType?.totalValue || 1)) * 100
                  }
                />
              );
            })}
          </CategoriesList>
        ) : (
          <TextContainer>
            <Text fontSize="lg">Comece a adicionar transações</Text>
          </TextContainer>
        )}
      </CategoriesContainer>
    </>
  );
}

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 20px;
  gap: 10px;
`;

const CategoriesList = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 200px;
  overflow-y: scroll;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;

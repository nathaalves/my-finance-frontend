import { useContext } from 'react';
import { Chart } from '../../components/Chart';
import styled from 'styled-components';
import { CategoryStatistics } from '../../components/CategoryStatistics';
import { Text } from '../../components/Text';
import {
  ContentContext,
  ContentContextType,
} from '../../contexts/content/ContentContext';
import { useLocation } from 'react-router-dom';
import { formatMoney } from '../../utils/formatMoney';

type Data = {
  name: string;
  value: number;
};

export function Statistics() {
  const { pathname } = useLocation();
  const { content } = useContext(ContentContext) as ContentContextType;

  const type = pathname === '/entradas' ? content?.inflow : content?.outflow;

  const data: Data[] = [];
  const colors: string[] = [];

  type?.categories?.forEach((category) => {
    data.push({
      name: category.name,
      value: category.sum,
    });
    colors.push(category.iconColor);
  });

  return (
    <>
      <GrathContainer>
        <Chart data={data} colors={colors} />
        <Total bold>R$ {formatMoney(type?.total || 0)}</Total>
      </GrathContainer>
      <CategoriesContainer>
        <Text fontSize="xl" bold>
          Categorias
        </Text>
        {data.length ? (
          <Categories>
            {type?.categories?.map((category) => {
              return (
                <CategoryStatistics
                  key={category.id}
                  icon={category.icon}
                  color={category.iconColor}
                  category={category.name}
                  value={formatMoney(category.sum)}
                  percentage={(category.sum / (type?.total || 1)) * 100}
                />
              );
            })}
          </Categories>
        ) : (
          <TextContainer>
            <Text fontSize="lg">Comece a adicionar transações</Text>
          </TextContainer>
        )}
      </CategoriesContainer>
    </>
  );
}

const GrathContainer = styled.div`
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

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 20px;
  gap: 10px;
`;

const Categories = styled.div`
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

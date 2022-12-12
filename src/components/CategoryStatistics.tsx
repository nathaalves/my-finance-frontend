import styled from 'styled-components';
import { Text } from './Text';
import { CategoryIcon } from './CategoryIcon';
import { MdArrowForwardIos } from 'react-icons/md';

type CategoryStatisticsProps = {
  icon: string;
  color: string;
  category: string;
  value: string;
  percentage: number;
};

export function CategoryStatistics({
  icon,
  color,
  category,
  value,
  percentage,
}: CategoryStatisticsProps) {
  return (
    <Container>
      <CategoryIconContainer>
        <CategoryIcon name={icon} color={color} />
      </CategoryIconContainer>
      <StatisticsContainer>
        <CategoryNameContainer>
          <Text fontSize="base" bold>
            {category}
          </Text>
        </CategoryNameContainer>
        <Values>
          <Text fontSize="sm" bold>
            R$ {value}
          </Text>
          <Text fontSize="sm">{percentage}%</Text>
        </Values>
      </StatisticsContainer>
      <ArrowButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

const CategoryIconContainer = styled.div`
  margin-right: 10px;
`;

const StatisticsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 60px - 20px);
`;
const CategoryNameContainer = styled.div`
  width: 55%;
  word-wrap: break-word;
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
`;

const ArrowButton = styled(MdArrowForwardIos)`
  font-size: ${({ theme }) => theme.text.size['xl']};
  color: ${({ theme }) => theme.color.primary};
  margin-left: 20px;
`;

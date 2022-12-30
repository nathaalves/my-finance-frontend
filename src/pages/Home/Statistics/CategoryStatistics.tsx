import styled from 'styled-components';
import { Text } from '../../../components/Text';
import { CategoryIcon } from '../../../components/CategoryIcon';
import { MdArrowForwardIos } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

type CategoryStatisticsProps = {
  icon: string;
  color: string;
  category: string;
  categoryId: string;
  value: string;
  percentage: number;
};

export function CategoryStatistics({
  icon,
  color,
  category,
  categoryId,
  value,
  percentage,
}: CategoryStatisticsProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container onClick={() => navigate(`${pathname}/categoria/${categoryId}`)}>
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
          <Text fontSize="sm">{percentage.toFixed(2)}%</Text>
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
  background-color: transparent;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(204, 204, 204, 0.205);
    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    z-index: -1;
  }
  &:hover::before {
    transform: scaleX(1);
  }
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

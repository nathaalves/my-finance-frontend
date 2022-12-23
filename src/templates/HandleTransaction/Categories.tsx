import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CategoryIcon } from '../../components/CategoryIcon';
import { Text } from '../../components/Text';
import { useContentQuery } from '../../hooks/queries/useContentQuery';

type CategoriesProps = {
  categoryId: string;
  handleForm: (key: string, value: string) => void;
};

export function Categories({ categoryId, handleForm }: CategoriesProps) {
  const { categoryType } = useParams();
  const { content } = useContentQuery();
  const type = categoryType === 'entradas' ? content?.inflow : content?.outflow;

  return (
    <Container>
      <Text fontSize="xl" bold>
        Categoria
      </Text>
      <CategoriesList>
        {type?.categories?.map((category) => {
          return (
            <Category
              key={category.id}
              onClick={() => handleForm('categoryId', category.id)}
            >
              <CategoryIcon
                name={category.icon}
                color={category.iconColor}
                size="70px"
                isActive={categoryId === category.id}
              />
              <CategoryNameContainer>
                <Text bold>{category.name}</Text>
              </CategoryNameContainer>
            </Category>
          );
        })}
      </CategoriesList>
    </Container>
  );
}

const Category = styled.div`
  width: 70px;
  text-overflow: ellipsis;
  gap: 4px;
`;

const CategoryNameContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
`;

const Container = styled.div`
  margin-top: 20px;
`;

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 220px;
  gap: calc((100% - 4 * 70px) / 3);
  margin-top: 12px;
`;

import styled from 'styled-components';
import { Text } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackArrow } from '../../components/BackArrow';

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isEditPage = pathname.includes('editar');
  const isInflow = pathname.includes('entradas');

  return (
    <Container>
      <Text fontSize="2xl" color="#FFFFFF" bold>
        {isEditPage ? 'Editar' : 'Adicionar'} {isInflow ? 'entrada' : 'saída'}
      </Text>
      <BackArrow onClick={() => navigate(-1)} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  position: relative;
  border-radius: 0 0 30px 30px;
  background: linear-gradient(
    315deg,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

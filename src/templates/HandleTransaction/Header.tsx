import { ImArrowLeft2 } from 'react-icons/im';
import { Text } from '../../components';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

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
`;

const BackArrow = styled(ImArrowLeft2)`
  font-size: ${({ theme }) => theme.text.size['2xl']};
  color: #ffffff;

  position: absolute;
  left: 16px; ;
`;

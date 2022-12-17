import { FaPlus } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function AddButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container onClick={() => navigate(`${pathname}/adicionar`)}>
      <FaPlus />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );

  position: absolute;
  right: 16px;
  bottom: 16px;

  svg {
    font-size: ${({ theme }) => theme.text.size['3xl']};
    color: #ffffff;
  }
`;

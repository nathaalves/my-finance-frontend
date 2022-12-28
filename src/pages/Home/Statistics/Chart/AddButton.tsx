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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  right: 16px;
  bottom: 16px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  svg {
    font-size: ${({ theme }) => theme.text.size['3xl']};
    color: #ffffff;
  }

  &:hover > svg {
    transition: transform 1s ease-in-out;
    transform: rotate(180deg);
  }
`;

import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from './Title';

type NavButtonProps = {
  children: string;
  path: string;
};

export function NavButton({ children, path }: NavButtonProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container onClick={() => navigate(path)}>
      <Title fontSize="xl" bold>
        {children}
      </Title>
      <Active isActive={pathname === path} />
    </Container>
  );
}

type ActiveProps = {
  isActive?: boolean;
};

const Container = styled.div`
  cursor: pointer;
`;
const Active = styled.div<ActiveProps>`
  width: 100%;
  height: 4px;
  background: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
`;

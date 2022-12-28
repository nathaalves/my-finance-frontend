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
    <Container
      onClick={() => navigate(path)}
      className={pathname === path ? 'active' : 'inactive'}
    >
      <Title fontSize="xl" bold>
        {children}
      </Title>
    </Container>
  );
}

const Container = styled.nav`
  flex: 1;
  padding: 4px 0;
  text-align: center;
  overflow: hidden;
  position: relative;

  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: #ffffff28;
    transform: scaleX(0);
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 4px;
    background-color: #fff;
    transition: width 0.5s ease-in-out;
  }

  &:first-child::after {
    right: 0;
  }
  &:last-child::after {
    left: 0;
  }

  &.active::after {
    width: 100%;
  }

  &.inactive::after {
    width: 0;
  }
`;

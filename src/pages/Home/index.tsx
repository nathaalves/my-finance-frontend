import styled from 'styled-components';
import { NavBar } from './NavBar';
import { Balance } from './Balance';
import { Outlet } from 'react-router-dom';

export function Home() {
  return (
    <>
      <BackgrounHeader />
      <Container>
        <Balance />
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 50px 16px 0 16px;
`;

const BackgrounHeader = styled.header`
  width: 100vw;
  height: 300px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 0 0 20px 30px;

  position: absolute;
  z-index: -1;
`;

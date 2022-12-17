import styled from 'styled-components';
import { NavButton } from '../../components/NavButton';

export function NavBar() {
  return (
    <Container>
      <NavButton path="/entradas">Entradas</NavButton>
      <NavButton path="/saidas">Saídas</NavButton>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

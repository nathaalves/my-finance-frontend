import styled from 'styled-components';
import { Text, Link } from '../../components';

export function FooterLink() {
  return (
    <Container>
      <Text>Já possui uma conta?</Text>
      <Link to="/login">Faça login</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  padding-bottom: 40px;
`;

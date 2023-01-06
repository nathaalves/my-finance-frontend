import styled, { keyframes } from 'styled-components';

export function LoadingPage() {
  return (
    <Container>
      <Logo>MyFinance</Logo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
`;

const Logo = styled.h2`
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.color.primary},
    ${({ theme }) => theme.color.secondary}
  );
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: ${({ theme }) => theme.text.fontFamily.logo};
  font-size: 4rem;
  color: transparent;

  animation: gradient 1s infinite alternate;

  @keyframes gradient {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;

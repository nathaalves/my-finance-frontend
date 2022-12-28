import { Text } from '../../components';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { formatMoney } from '../../utils/formatMoney';
import { BackArrow } from '../../components/BackArrow';

type HeaderProps = {
  name: string | undefined;
  value: number | undefined;
};

export function Header({ name, value }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleContainer>
        <Text fontSize="2xl" color="#FFFFFF" bold>
          {name}
        </Text>
        <Text fontSize="2xl" color="#FFFFFF" bold>
          R$ {formatMoney(value)}
        </Text>
      </TitleContainer>
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

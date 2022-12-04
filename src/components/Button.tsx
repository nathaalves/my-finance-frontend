import styled, { DefaultTheme } from 'styled-components';
import { Elipses } from '../assets/spinners/Elipses';

type ButtonProps = {
  isActive?: boolean;
  children: React.ReactNode;
};

export default function Button({ children, isActive = true }: ButtonProps) {
  return (
    <Conatainer isActive={isActive} disabled={!isActive}>
      {isActive ? children : <Elipses />}
    </Conatainer>
  );
}

type ContainerProps = {
  fontSize?: keyof DefaultTheme['text']['size'];
  isActive?: boolean;
};

const Conatainer = styled.button<ContainerProps>`
  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  margin: 25px auto 0 auto;

  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  border-radius: 30px;
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size['xl']};
  color: ${({ theme }) => theme.color.button.text};

  cursor: ${(props) => (props.isActive ? 'pointer' : 'default')};
`;

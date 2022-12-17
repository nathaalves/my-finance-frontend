import styled from 'styled-components';
import { DynamicIcon } from './DynamicIcon';

type CategoryIconProps = {
  name: string;
  color: string;
  size?: string;
  isActive?: boolean;
};

export function CategoryIcon({
  name,
  color,
  size,
  isActive,
}: CategoryIconProps) {
  return (
    <Container color={color} size={size} isActive={isActive}>
      <DynamicIcon name={name} />
    </Container>
  );
}

type ContainerProps = {
  color: string;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  border-radius: 10px;
  background: ${({ color }) => `${color}33`};

  svg {
    font-size: ${({ theme }) => theme.text.size['3xl']};
    color: ${({ color }) => color};
  }
`;

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

const Container = styled.div<Partial<CategoryIconProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? size : '60px')};
  height: ${({ size }) => (size ? size : '60px')};
  border: ${({ isActive, color }) =>
    isActive ? `4px solid ${color}` : 'none'};
  border-radius: 10px;
  background: ${({ color }) => `${color}33`};

  svg {
    font-size: calc(${({ size }) => (size ? size : '60px')} * 0.7);
    color: ${({ color }) => color};
  }
`;

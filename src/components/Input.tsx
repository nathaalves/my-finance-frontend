import styled from 'styled-components';
import { DynamicIcon } from './DynamicIcon';
import { Label } from './Label';

export type InputProps = {
  label?: string;
  type?: string;
  name?: string;
  icon?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
};

export function Input({
  label,
  type = 'text',
  name,
  icon,
  value,
  disabled = false,
  onChange,
  onIconClick,
}: InputProps) {
  function hasOnIconClick() {
    return !!onIconClick;
  }
  return (
    <Container disabled={disabled}>
      <InputContainer>
        <Label>{label}</Label>
        <InputBox
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          required
        />
      </InputContainer>
      <IconContainer onClick={onIconClick} pointer={hasOnIconClick()}>
        <DynamicIcon name={icon} />
      </IconContainer>
    </Container>
  );
}

type ContainerProps = {
  disabled: boolean;
};

const Container = styled.div<ContainerProps>`
  display: flex;

  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding-left: 15px;
  padding: 10px 10px 10px 16px;

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.input.locked : theme.color.input.active};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'text')};

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.color.primary};
    padding: 8px 8px 8px 14px;
  }

  &:focus-within svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const InputBox = styled.input`
  all: unset;

  width: calc(100% - 14px);
  height: 25px;
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-weight: 500;
  font-size: 18px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.input.label : theme.color.text};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

type IconContainerProps = {
  pointer: boolean;
};

const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;

  svg {
    margin: auto 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.input.label};
  }

  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
`;

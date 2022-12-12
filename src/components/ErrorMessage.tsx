import styled from 'styled-components';
import { DynamicIcon } from './DynamicIcon';

export function ErrorMessage({ children }: { children: string }) {
  return (
    <Component>
      <IconContainer>
        <DynamicIcon name="MdError" />
      </IconContainer>
      {children}
    </Component>
  );
}

const Component = styled.h3`
  display: flex;
  align-items: center;

  width: 100%;
  gap: 8px;
  padding: 4px 16px;
  border-radius: 10px;
  background-color: #f9d6d0;

  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ theme }) => theme.text.size.sm};
  font-weight: 500;
  color: #ed5347;
  & svg {
    font-size: ${({ theme }) => theme.text.size.xl};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
`;

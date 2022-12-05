import styled, { DefaultTheme } from 'styled-components';

export type LabelProps = {
  fontSize?: keyof DefaultTheme['text']['size'];
};

export const Label = styled.label<LabelProps>`
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-weight: 500;
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size['sm']};
  color: ${({ theme }) => theme.color.input.label};
`;

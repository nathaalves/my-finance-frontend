import styled, { DefaultTheme } from 'styled-components';

export interface TextProps {
  fontSize?: keyof DefaultTheme['text']['size'];
  bold?: boolean;
}

export const Text = styled.h3<TextProps>`
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size.base};
  line-height: ${({ fontSize, theme }) =>
    fontSize ? theme.text.lineHeight[fontSize] : theme.text.lineHeight.base};
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
  color: ${({ theme }) => theme.color.text};
`;

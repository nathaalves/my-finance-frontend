import styled, { DefaultTheme } from 'styled-components';

type TextProps = {
  fontSize?: keyof DefaultTheme['text']['size'];
};

export const Text = styled.h3<TextProps>`
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size.base};
  line-height: ${({ fontSize, theme }) =>
    fontSize ? theme.text.lineHeight[fontSize] : theme.text.lineHeight.base};
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
`;

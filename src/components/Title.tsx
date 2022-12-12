import styled, { DefaultTheme } from 'styled-components';

export interface TitleProps {
  fontSize?: keyof DefaultTheme['text']['size'];
  bold?: boolean;
}
export const Title = styled.h3<TitleProps>`
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size.base};
  line-height: ${({ fontSize, theme }) =>
    fontSize ? theme.text.lineHeight[fontSize] : theme.text.lineHeight.base};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: #fff;
`;

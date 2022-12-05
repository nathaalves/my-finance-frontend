import styled, { DefaultTheme } from 'styled-components';

export type LogoProps = {
  fontSize?: keyof DefaultTheme['text']['size'];
};

export const Logo = styled.h2<LogoProps>`
  font-family: ${({ theme }) => theme.text.fontFamily.logo};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size['6xl']};
  color: ${({ theme }) => theme.color.primary};
`;

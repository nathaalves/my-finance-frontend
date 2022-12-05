import { Link as RouterLink } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

export type LinkProps = {
  fontSize?: keyof DefaultTheme['text']['size'];
};

export const Link = styled(RouterLink)<LinkProps>`
  text-decoration: none;
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size.base};
  line-height: ${({ fontSize, theme }) =>
    fontSize ? theme.text.lineHeight[fontSize] : theme.text.lineHeight.base};
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
`;

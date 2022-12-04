import { Link as RouterLink } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

type TextProps = {
  fontSize?: keyof DefaultTheme['text']['size'];
};

export const Link = styled(RouterLink)<TextProps>`
  text-decoration: none;
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.text.size[fontSize] : theme.text.size.base};
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
`;

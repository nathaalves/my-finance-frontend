import { ImArrowLeft2 } from 'react-icons/im';
import styled from 'styled-components';

export const BackArrow = styled(ImArrowLeft2)`
  box-sizing: unset;
  font-size: ${({ theme }) => theme.text.size['2xl']};
  color: #ffffff;
  padding: 5px;
  position: absolute;
  left: 16px;
  cursor: pointer;
`;

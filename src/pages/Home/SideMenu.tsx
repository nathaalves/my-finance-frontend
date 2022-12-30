import styled from 'styled-components';
import { MdDehaze } from 'react-icons/md';
import { useState } from 'react';
import { SideMenuButton } from '../../components';

export function SideMenu() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setIsOpened(!isOpened)} />
      <MenuContainer className={isOpened ? 'opened' : 'closed'}>
        <Gap
          onClick={() => setIsOpened(!isOpened)}
          className={isOpened ? 'opened' : 'closed'}
        />
        <Menu className={isOpened ? 'opened' : 'closed'}>
          <SideMenuButton />
        </Menu>
      </MenuContainer>
    </>
  );
}

const MenuContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  transition: visibility 300ms ease;

  &.closed {
    visibility: hidden;
  }
`;

const Menu = styled.div`
  width: 0px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};

  position: absolute;
  right: 0;

  transition: width 300ms ease;

  &.opened {
    width: 300px;
  }
`;

const Gap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.2;

  transition: opacity 300ms ease;

  &.closed {
    opacity: 0;
  }
`;

const MenuIcon = styled(MdDehaze)`
  color: #fff;
  font-size: 34px;

  position: absolute;
  top: 30px;
  right: 24px;

  cursor: pointer;
`;

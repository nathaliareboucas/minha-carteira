import React from 'react';

import {useAuth} from '../../hooks/auth';
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';

import {Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton} from './styles';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {

  const {signOut} = useAuth();

  return(
    <Container menuIsOpen={true}>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha Carteira"/>
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
import React from 'react';

import {Container, Logo, Form, FormTitle} from './styles';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => {
  return(
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira"/>
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>

        <Input required type="email" placeholder="Email"/>
        <Input required type="password" placeholder="Senha"/>

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}

export default Signin;
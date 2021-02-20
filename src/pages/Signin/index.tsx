import React from 'react';

import {Container, Logo, Form, FormTitle} from './styles';
import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => {
  return(
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira"/>
        <h2>Minha Carteira</h2>
      </Logo>

      <Form>
        <FormTitle>Entrar</FormTitle>

        <input type="text"></input>
        <input type="text"></input>

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}

export default Signin;
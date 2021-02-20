import React, {useState} from 'react';

import {useAuth} from '../../hooks/auth';
import {Container, Logo, Form, FormTitle} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {signIn} = useAuth();

  return(
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira"/>
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>

        <Input 
          placeholder="Email"
          type="email" 
          required 
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input 
          placeholder="Senha"
          type="password" 
          required 
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">Acessar</Button>        
      </Form>
    </Container>
  );
}

export default Signin;
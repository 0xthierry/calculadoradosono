import React from 'react';
import Button from '../Button';
import Wrapper from '../Wrapper';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Calculadora do sono</h1>
        <Button type="button" variant="filled">
          Loja
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Header;

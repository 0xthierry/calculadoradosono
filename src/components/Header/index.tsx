import React from 'react';
import { GiPillow } from 'react-icons/gi';
import Wrapper from '../Wrapper';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <GiPillow />
          <h1>Calculadora do sono</h1>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;

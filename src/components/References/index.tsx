import React from 'react';
import Wrapper from '../Wrapper';
import { Container } from './styles';

const References: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h3>Referências</h3>
        <ul>
          <li>
            <a
              href="https://biblioteca.univap.br/dados/INIC/cd/inic/IC4%20anais/IC4-15OK.pdf"
              target="__blank"
            >
              SONO UM FENÔMENO FISIOLÓGICO
            </a>
          </li>
          <li>
            <a
              href="http://www.periodicos.usp.br/rmrp/article/view/372/373"
              target="__blank"
            >
              O SONO NORMAL
            </a>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default References;

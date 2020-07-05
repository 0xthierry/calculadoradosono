/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { GiPillow } from 'react-icons/gi';
import Wrapper from '../Wrapper';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <S.Container>
        <div>
          <GiPillow />
          <h1>Calculadora do sono</h1>
        </div>

        <input id="menu-hamburguer" type="checkbox" />
        <S.LabelContainer htmlFor="menu-hamburguer">
          <span />
        </S.LabelContainer>
        <S.LinksContainer>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/duvidas">
              <a>Dúvidas</a>
            </Link>
          </li>
          <li>
            <Link href="/termos-de-uso">
              <a>Termos de uso</a>
            </Link>
          </li>
          <li>
            <Link href="/politicas">
              <a>Política de privacidade</a>
            </Link>
          </li>
        </S.LinksContainer>
      </S.Container>
    </Wrapper>
  );
};

export default Header;

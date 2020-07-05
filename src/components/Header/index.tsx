/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { animateScroll } from 'react-scroll';
import { GiPillow } from 'react-icons/gi';
import Wrapper from '../Wrapper';
import * as S from './styles';

const Header: React.FC = () => {
  const [value, setValue] = React.useState(false);
  React.useEffect(() => {
    if (value === true) {
      animateScroll.scrollToTop();
    }
  }, [value]);

  return (
    <Wrapper>
      <S.Container>
        <Link href="/">
          <a>
            <div>
              <GiPillow />
              <h1>Calculadora do sono</h1>
            </div>
          </a>
        </Link>

        <input
          id="menu-hamburguer"
          type="checkbox"
          onChange={e => setValue(e.target.checked)}
          checked={value}
        />
        <S.LabelContainer htmlFor="menu-hamburguer">
          <span />
        </S.LabelContainer>
        <S.LinksContainer>
          <div>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/politicas">
                <a>Políticas e Termos de Uso</a>
              </Link>
            </li>
          </div>
        </S.LinksContainer>
      </S.Container>
    </Wrapper>
  );
};

export default Header;

import React from 'react';
import * as S from './styles';
import Header from '../Header';

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
};

export default DefaultLayout;

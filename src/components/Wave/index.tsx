import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
}

const Wave: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <S.Container>
        <S.WaveOne />
        <S.WaveTwo />
        <S.WaveThree />
      </S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

export default Wave;

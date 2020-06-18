import React from 'react';

import * as S from './styles';

interface IProp {
  children: React.ReactNode;
}

const Container: React.FC<IProp> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;

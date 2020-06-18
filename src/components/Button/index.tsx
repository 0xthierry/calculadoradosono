import React from 'react';
import * as S from './styles';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  variant: 'filled' | 'outlined';
}

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;

import styled from 'styled-components';
import { IProps } from '.';
import theme from '../../theme';

const variants = {
  filled: {
    color: theme.colors.white,
    background: theme.colors.primary.main,
    '&:hover': {
      background: theme.colors.white,
      color: theme.colors.primary.main,
    },
  },
  outlined: {
    color: theme.colors.primary.main,
    background: theme.colors.white,
    '&:hover': {
      background: theme.colors.primary.main,
      color: theme.colors.white,
    },
  },
};

export const Button = styled.button<IProps>`
  font-weight: 600;
  text-transform: uppercase;
  height: 3.5rem;
  width: 20rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 2px;
  outline: none;
  transition: background 0.5s;
  ${({ variant }) => variants[variant]}
`;

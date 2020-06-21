import styled from 'styled-components';
import media from 'styled-media-query';

import { IProps } from '.';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 2.4rem;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  p {
    text-align: justify;
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 1.6rem;
  }
`;

export const ImageContainer = styled.div<Pick<IProps, 'invert'>>`
  display: flex;
  justify-content: ${({ invert }) => (invert ? 'flex-start' : 'flex-end')};

  img {
    height: 35rem;
  }
`;

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing(4)};

  ${media.lessThan('medium')`
  `}
`;

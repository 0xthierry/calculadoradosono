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

  p + p {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }

  ${media.lessThan('medium')`
    h2 {
      font-size: 2rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 28rem;
    height: 100%;
    border-radius: 50%;
  }

  a {
    font-size: 1.2rem;
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  ${media.lessThan('medium')`
    img {
      max-height: 20rem;
    }
  `}
`;

export const Container = styled.div<Pick<IProps, 'invert'>>`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing(4)};

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-row-gap: ${({ theme }) => theme.spacing(2)};
  `}
`;

import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 2.4rem;
  }

  ${media.lessThan('medium')`
    h2 {
      font-size: 2rem;
    }
  `}
`;

export const ItemsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: baseline;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    background: #fff;
  }

  a + a {
    margin-left: 2rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 25rem;
    max-height: 14rem;
  }

  p {
    font-size: 1.4rem;
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

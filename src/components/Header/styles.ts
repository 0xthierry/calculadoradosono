import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 3rem;
  }

  button {
    text-transform: 'uppercase';
  }

  ${media.lessThan('small')`
    justify-content: center;
    button {
      display: none;
    }
  `}
`;

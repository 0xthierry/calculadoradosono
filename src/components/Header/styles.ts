import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    svg {
      font-size: 30px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    h1 {
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 3rem;
      margin-left: 1rem;
    }
  }

  button {
    text-transform: 'uppercase';
  }

  ${media.lessThan('medium')`
    justify-content: center;
    button {
      display: none;
    }
  `}
`;

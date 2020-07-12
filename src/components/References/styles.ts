import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  ul {
    list-style: none;
  }

  li + li {
    margin-top: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 600;
    text-decoration: none;

    :hover {
      opacity: 0.6;
    }
  }
`;

import styled from 'styled-components';

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
`;

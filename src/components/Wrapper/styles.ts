import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.max};
  min-width: ${({ theme }) => theme.container.min};

  margin: 0 auto;

  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
`;

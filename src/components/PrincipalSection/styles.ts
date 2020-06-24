import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 3.5rem;
    text-align: center;
    padding: 0px 0px ${({ theme }) => theme.spacing(8)};
  }

  button {
    height: 4rem;
  }

  ${media.lessThan('medium')`
    h2 {
      font-size: 2.5rem;
    }
  `}
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20rem);
  grid-column-gap: ${({ theme }) => theme.spacing(4)};
  align-self: center;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: ${({ theme }) => theme.spacing(4)};
    width: 100%;
  `}
`;

export const CalculateContainerButton = styled.div`
  padding: ${({ theme }) => theme.spacing(8)} 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    max-width: 40rem;
  }
`;

export const CardGroupContainer = styled.div`
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing(8)} 0px 0px;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing(4)};
  grid-row-gap: ${({ theme }) => theme.spacing(4)};

  ${media.lessThan('small')`
    grid-template-columns: repeat(1, 1fr);
    grid-template-row: repeat(4, 1fr);
  `}
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  height: 100%;
  cursor: pointer;
  box-shadow: 0 0 20px -4px #c2cfd6;

  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};

  div {
    display: flex;
    justify-content: space-between;
    > strong {
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 1.6rem;
    }
  }

  p {
    margin-top: ${({ theme }) => theme.spacing(2)};
    font-size: 1.4rem;
  }

  &:hover {
    transform: translateX(5px);
    transition: all 0.2s ease 0s;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

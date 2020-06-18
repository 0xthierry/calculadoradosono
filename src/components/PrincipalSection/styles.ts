import styled from 'styled-components';
import media from 'styled-media-query';

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 3.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary.main};
    padding: ${({ theme }) => theme.spacing(8)} 0px;
    font-size: 1.8rem;
  }

  button {
    text-transform: 'uppercase';
  }
`;

export const RightContent = styled.div`
  padding: 0px ${({ theme }) => theme.spacing(8)};

  h2 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 3.5rem;
    text-align: center;
    padding: 0px 0px ${({ theme }) => theme.spacing(8)};
  }

  button {
    height: 4rem;
  }
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing(4)};
`;

export const CalculateContainerButton = styled.div`
  padding: ${({ theme }) => theme.spacing(8)} 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 80%;
  }
`;

export const CardGroupContainer = styled.div`
  background: #f4f4f4;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 4px;

  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  height: 100%;
  cursor: pointer;

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
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: ${({ theme }) => theme.spacing(4)};
    grid-template-rows: repeat(2, 1fr);
  `}

  ${media.between('small', 'medium')`
    ${LeftContent} {
      display: none;
    }
  `}
`;

import styled from 'styled-components';
import media from 'styled-media-query';

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
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

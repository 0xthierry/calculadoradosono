import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.nav`
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

    div {
      h1 {
        font-size: 2.5rem;
      }
    }
  `}

  input {
    display: none;
  }

  input:checked ~ label span {
    transform: rotate(45deg);
  }

  input:checked ~ label span:before {
    top: 0;
    transform: rotate(90deg);
  }

  input:checked ~ label span:after {
    bottom: 0;
    transform: rotate(90deg);
  }

  input:checked ~ label {
    box-shadow: 0 0 0 130vw #fff, 0 0 0 100vh #fff;
  }

  input:checked ~ ul {
    opacity: 1;
    z-index: 1000;
  }
`;

export const LabelContainer = styled.label`
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  cursor: pointer;
  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary.main},
    0 0 0 0 ${({ theme }) => theme.colors.primary.main};
  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1000;

  :hover {
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.primary.main},
      0 0 0 8px ${({ theme }) => theme.colors.primary.main};
  }

  > span {
    display: block;
    background: #fff;
    width: 2.5rem;
    height: 2px;
    position: relative;
    top: 2.5rem;
    left: 1.3rem;
    transition: 0.5s ease-in-out;

    ::after,
    ::before {
      background: #fff;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }

    ::before {
      top: -1rem;
    }

    ::after {
      bottom: -1rem;
    }
  }
`;

export const LinksContainer = styled.ul`
  z-index: -5;
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 500;
    display: block;
    margin-bottom: 4rem;
    text-align: center;
    font-size: 2.4rem;

    :hover {
      opacity: 0.7;
    }
  }
`;

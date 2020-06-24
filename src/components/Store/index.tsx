import React from 'react';
import Wrapper from '../Wrapper';
import { Container, ItemsContainer, ItemContainer } from './styles';

interface Item {
  alt: string;
  src: string;
  description: string;
  link: string;
}

interface Props {
  items: Item[];
}

const Store: React.FC<Props> = ({ items }) => {
  return (
    <Wrapper>
      <Container>
        <h2>Melhore sua noite de sono</h2>
        <ItemsContainer>
          {items.map(({ description, src, alt, link }) => (
            <a href={link} target="__blank" key={description}>
              <ItemContainer>
                <img src={src} alt={alt} />

                <p>{description}</p>
              </ItemContainer>
            </a>
          ))}
        </ItemsContainer>
      </Container>
    </Wrapper>
  );
};

export default Store;

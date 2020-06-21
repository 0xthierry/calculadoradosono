import React from 'react';
import Wrapper from '../Wrapper';
import * as S from './styles';

export interface IProps {
  content: {
    title: string;
    description: string[];
  };
  img: {
    alt: string;
    src: string;
  };
  invert?: boolean;
}

const ContentSection: React.FC<IProps> = ({ content, img, invert }) => {
  return (
    <Wrapper>
      <S.Container>
        {!invert ? (
          <S.Content>
            <h2>{content.title}</h2>
            {content.description.map(text => (
              <p key="text">{text}</p>
            ))}
          </S.Content>
        ) : (
          <S.ImageContainer invert={invert}>
            <img src={img.src} alt={img.alt} />
          </S.ImageContainer>
        )}
        {invert ? (
          <S.Content>
            <h2>{content.title}</h2>
            {content.description.map(text => (
              <p key="text">{text}</p>
            ))}
          </S.Content>
        ) : (
          <S.ImageContainer invert={invert}>
            <img src={img.src} alt={img.alt} />
          </S.ImageContainer>
        )}
      </S.Container>
    </Wrapper>
  );
};

export default ContentSection;

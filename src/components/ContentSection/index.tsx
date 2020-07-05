import React from 'react';
import Wrapper from '../Wrapper';
import * as S from './styles';

export interface IProps {
  content: {
    title: string;
    description: string[];
  };
  img?: {
    alt: string;
    src: string;
    attribuition?: {
      text: string;
      url: string;
    };
  };
  invert?: boolean;
  fullWidth?: boolean;
  titleAlign?: 'left' | 'right' | 'center';
  titleSize?: 's' | 'm' | 'g';
}

const ContentSection: React.FC<IProps> = ({
  content,
  img,
  invert,
  fullWidth,
  titleAlign,
  titleSize,
}) => {
  return (
    <Wrapper>
      <S.Container invert={invert} fullWidth={fullWidth}>
        <S.Content titleAlign={titleAlign} titleSize={titleSize}>
          <h2>{content.title}</h2>
          {content.description.map(text => (
            <p key={text}>{text}</p>
          ))}
        </S.Content>
        {img && (
          <S.ImageContainer>
            <img src={img.src} alt={img.alt} />
            {img?.attribuition && (
              <a href={img.attribuition.url} target="__blank">
                {img.attribuition.text}
              </a>
            )}
          </S.ImageContainer>
        )}
      </S.Container>
    </Wrapper>
  );
};

export default ContentSection;

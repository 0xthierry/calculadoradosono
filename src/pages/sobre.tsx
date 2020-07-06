import React from 'react';
import ContentSection from '../components/ContentSection';
import DefaultLayout from '../components/DefaultLayout';

const About: React.FC = () => {
  return (
    <DefaultLayout>
      <ContentSection
        content={{
          title: 'Quem somos ?',
          description: [],
        }}
      />
      <ContentSection
        content={{
          title: 'O que são os ciclos do sono?',
          description: [],
        }}
      />
      <ContentSection
        content={{
          title: 'Como a calculadora do sono funciona?',
          description: [],
        }}
      />
      <ContentSection
        content={{
          title: 'Que horas dormir para acordar as?',
          description: [],
        }}
      />
      <ContentSection
        content={{
          title: 'Quantas horas preciso dormir?',
          description: [],
        }}
      />
    </DefaultLayout>
  );
};

export default About;

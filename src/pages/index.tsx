import React from 'react';
import PrincipalSection from '../components/PrincipalSection';
import Wave from '../components/Wave';
import DefaultLayout from '../components/DefaultLayout';
import ContentSection from '../components/ContentSection';

const Home: React.FC = () => {
  return (
    <>
      <Wave>
        <DefaultLayout>
          <PrincipalSection />
        </DefaultLayout>
        <ContentSection
          content={{
            title: 'O que é a calculadora do sono ?',
            description: [
              'Esse site calcula o horário ideal para dormir beseado nos ciclos de sono.',
              'O cálculo deve ser feito a partir do momento que se adormece e não do momento em que se deita. Por isso, antes de fazer o cálculo, é importante acrescentar o tempo que normalmente se leva para dormir, o que é em média 15 a 30 minutos.',
            ],
          }}
          img={{
            src: '/images/2310324.jpg',
            alt: 'O que são ciclos de sono',
            attribuition: {
              text: 'Home vector created by freepik',
              url: 'https://www.freepik.com/free-photos-vectors/home',
            },
          }}
        />
        <ContentSection
          content={{
            title: 'Como instalar a calculadora do sono no celular?',
            description: [
              'Esse site calcula o horário ideal para dormir beseado nos ciclos de sono.',
              'O cálculo deve ser feito a partir do momento que se adormece e não do momento em que se deita. Por isso, antes de fazer o cálculo, é importante acrescentar o tempo que normalmente se leva para dormir, o que é em média 15 a 30 minutos.',
            ],
          }}
        />
      </Wave>
    </>
  );
};

export default Home;

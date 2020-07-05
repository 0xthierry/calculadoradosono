import React from 'react';
import PrincipalSection from '../components/PrincipalSection';
import Wave from '../components/Wave';
import DefaultLayout from '../components/DefaultLayout';
// import Ad from '../components/Ad';
// import ContentSection from '../components/ContentSection';
// import Store from '../components/Store';

const Home: React.FC = () => {
  return (
    <>
      <Wave>
        <DefaultLayout>
          <PrincipalSection />
        </DefaultLayout>
        {/* <ContentSection
          content={{
            title: 'Calculadora do sono',
            description: [
              'O cálculo do tempo de sono deve ser feito a partir do momento que se adormece e não no momento em que se deita, pois nem sempre a hora de deitar corresponde à hora que se adormece. Por isso, antes de fazer o cálculo, é importante acrescentar o tempo que normalmente se leva para dormir, o que é em média 15 a 30 minutos.',
              'A quantidade de ciclos de 90 minutos que se dorme é variável e depende da necessidade de cada pessoa, porém o segredo é permitir que cada ciclo se complete totalmente, acordando apenas no final deste. O ciclo de 90 minutos pode ser repetido tantas vezes quanto necessário, até que se consiga recuperar a energia gasta durante o dia.',
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
        /> */}
      </Wave>
    </>
  );
};

export default Home;

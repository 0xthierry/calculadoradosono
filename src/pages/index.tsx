import React from 'react';
import PrincipalSection from '../components/PrincipalSection';
import Header from '../components/Header';
import Wave from '../components/Wave';
// import Ad from '../components/Ad';
import ContentSection from '../components/ContentSection';
import Store from '../components/Store';

const Home: React.FC = () => {
  return (
    <>
      <Wave>
        <Header />
        <PrincipalSection />
        {/* <Ad /> */}
        <ContentSection
          content={{
            title: 'O que são ciclos de sono?',
            description: [
              'Durante o sono, passamos por alguns estágios e cada estágio está associado a diferentes ondas cerebrais. Quando conseguimos atravessar todos os estágios com sucesso, alcançamos um ciclo de sono que normalmente ocorre em 90 minutos, utilizamos essa métrica para calcular o horário ideal para você dormir.',
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
        <Store
          items={[
            {
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71nqxsBVjYL._AC_SX569_.jpg',
              alt:
                'Fibrasca Nasa - Travesseiro Visco, Branco, 50 X 70 Cm, Enchimento 100% Poliuretano',
              description:
                'Fibrasca Nasa - Travesseiro Visco, Branco, 50 X 70 Cm, Enchimento 100% Poliuretano',
              link: 'https://amzn.to/3i6tVnC',
            },
            {
              src:
                'https://images-na.ssl-images-amazon.com/images/I/61n7oXEhMUL._AC_SX679_.jpg',
              alt: 'Protetor de Olhos Blackout, Curtlo, Unissex, Preto',
              description: 'Protetor de Olhos Blackout, Curtlo, Unissex, Preto',
              link: 'https://amzn.to/2NEvzOZ',
            },
            {
              src:
                'https://images-na.ssl-images-amazon.com/images/I/41gOdaJX5cL._SX293_BO1,204,203,200_.jpg',
              alt: 'Por que Nós Dormimos. A Nova Ciência do Sono e do Sonho',
              description:
                'Por que Nós Dormimos. A Nova Ciência do Sono e do Sonho',
              link: 'https://amzn.to/3i5Kvnt',
            },
          ]}
        />
      </Wave>
    </>
  );
};

export default Home;

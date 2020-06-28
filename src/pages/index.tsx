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
        />
        <ContentSection
          content={{
            title: 'O que são ciclos de sono?',
            description: [
              'Durante o sono, passamos por alguns estágios e cada estágio está associado a diferentes ondas cerebrais. Quando conseguimos atravessar todos os estágios com sucesso, alcançamos um ciclo de sono que normalmente ocorre em 90 minutos.',
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
            title: 'Quais são as fases de sono?',
            description: [
              'Quando você adormece, seu cérebro e corpo passam por vários ciclos de sono. Cada ciclo inclui quatro fases distintas.',
              'Os três primeiros estágios fazem parte do sono do movimento não rápido dos olhos (NREM).',
              'O último estágio é o sono por movimento rápido dos olhos (REM).',
              'As fases NREM costumavam ser classificadas como fases 1, 2, 3, 4 e REM. Agora, a Fundação Nacional do Sono os classifica dessa forma:',
              'N1 (antiga fase 1): Este é o primeiro estágio do sono, e é o período entre estar acordado e adormecer.',
              'N2 (antigo estágio 2): O início do sono começa nesta fase à medida que você se torna inconsciente do que o rodeia. A sua temperatura corporal baixa ligeiramente e a sua respiração e frequência cardíaca tornam-se regulares.',
              'N3 (antigos estágios 3 e 4): Este é o estágio de sono mais profundo e restaurativo durante o qual a respiração diminui, a pressão arterial cai, os músculos relaxam, os hormônios são liberados, a cura ocorre e seu corpo fica reenergizado.',
              'REM: Esta é a fase final do ciclo do sono. Ele ocupa cerca de 25 por cento do seu ciclo do sono. É quando seu cérebro está mais ativo e os sonhos ocorrem. Durante este estágio, seus olhos se movem para frente e para trás rapidamente sob suas pálpebras. O sono REM ajuda a melhorar seu desempenho mental e físico quando você acorda.',
              'Leva, em média, cerca de 90 minutos para passar por cada ciclo. Se você conseguir completar cinco ciclos por noite, você terá 7,5 horas de sono por noite. Seis ciclos completos são cerca de 9 horas de sono.',
              'Idealmente, você quer acordar no final de um ciclo de sono em vez de no meio dele. Você geralmente se sente mais refrescado e energizado se você acordar no final de um ciclo de sono.',
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

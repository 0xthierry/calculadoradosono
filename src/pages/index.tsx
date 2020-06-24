import React from 'react';
import PrincipalSection from '../components/PrincipalSection';
import Header from '../components/Header';
import Wave from '../components/Wave';
import Ad from '../components/Ad';
import ContentSection from '../components/ContentSection';
import Store from '../components/Store';

const Home: React.FC = () => {
  return (
    <>
      <Wave>
        <Header />
        <PrincipalSection />
        <Ad />
        <ContentSection
          content={{
            title: 'A importancia do ciclo de sono',
            description: [
              'Vivamus rhoncus turpis sit amet justo pellentesque tincidunt. In placerat dapibus rhoncus. Vivamus a nisl vulputate, pellentesque mi et, pharetra erat. Vivamus at sodales justo. Maecenas egestas mollis ligula, sit amet tempor tortor luctus quis. Suspendisse a neque ac mi elementum pharetra. Fusce tincidunt eu nisl eu varius.',
            ],
          }}
          img={{
            src: '/images/profile.jpg',
            alt: 'Pessoa pensando sobre a importancia do ciclo de sono',
          }}
        />
        <ContentSection
          content={{
            title: 'A importancia do ciclo de sono',
            description: [
              'Vivamus rhoncus turpis sit amet justo pellentesque tincidunt. In placerat dapibus rhoncus. Vivamus a nisl vulputate, pellentesque mi et, pharetra erat. Vivamus at sodales justo. Maecenas egestas mollis ligula, sit amet tempor tortor luctus quis. Suspendisse a neque ac mi elementum pharetra. Fusce tincidunt eu nisl eu varius.',
            ],
          }}
          img={{
            src: '/images/profile.jpg',
            alt: 'Pessoa pensando sobre a importancia do ciclo de sono',
          }}
          invert
        />
        <ContentSection
          content={{
            title: 'A importancia do ciclo de sono',
            description: [
              'Vivamus rhoncus turpis sit amet justo pellentesque tincidunt. In placerat dapibus rhoncus. Vivamus a nisl vulputate, pellentesque mi et, pharetra erat. Vivamus at sodales justo. Maecenas egestas mollis ligula, sit amet tempor tortor luctus quis. Suspendisse a neque ac mi elementum pharetra. Fusce tincidunt eu nisl eu varius.',
            ],
          }}
          img={{
            src: '/images/profile.jpg',
            alt: 'Pessoa pensando sobre a importancia do ciclo de sono',
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
              link:
                'https://www.amazon.com.br/Travesseiro-Fronhas-Fibrasca-Revestimento-Poli%C3%A9ster/dp/B07C53DCT8/',
            },
            {
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71nqxsBVjYL._AC_SX569_.jpg',
              alt:
                'Fibrasca Nasa - Travesseiro Visco, Branco, 50 X 70 Cm, Enchimento 100% Poliuretano',
              description:
                'Fibrasca Nasa - Travesseiro Visco, Branco, 50 X 70 Cm, Enchimento 100% Poliuretano',
              link:
                'https://www.amazon.com.br/Travesseiro-Fronhas-Fibrasca-Revestimento-Poli%C3%A9ster/dp/B07C53DCT8/',
            },
            {
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71nqxsBVjYL._AC_SX569_.jpg',
              alt:
                'Fibrasca Nasa - Travesseiro Visco, Branco, 50 X 70 Cm, Enchimento 100% Poliuretano',
              description:
                'Fibrasca Nasa - Travesseiro Visco, Branco, 50 X 70 Cm, Enchimento 100% Poliuretano',
              link:
                'https://www.amazon.com.br/Travesseiro-Fronhas-Fibrasca-Revestimento-Poli%C3%A9ster/dp/B07C53DCT8/',
            },
          ]}
        />
      </Wave>
    </>
  );
};

export default Home;

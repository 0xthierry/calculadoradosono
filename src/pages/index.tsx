import React from 'react';
import PrincipalSection from '../components/PrincipalSection';
import Header from '../components/Header';
import Wave from '../components/Wave';
import Ad from '../components/Ad';
import ContentSection from '../components/ContentSection';

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
      </Wave>
    </>
  );
};

export default Home;

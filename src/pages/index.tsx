import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Initial Structure</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
      </section>
      <img src="/images/profile.jpg" alt="" />
    </>
  );
};

export default Home;

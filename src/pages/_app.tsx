/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import withGA from 'next-ga';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/global';
import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>O melhor horário para dormir - Calculadora do sono</title>
        <meta
          name="google-site-verification"
          content="Y8rEsYqusKR6yP2GDl1DOZErK_ffdPeFDX9vuwcfByQ"
        />
        <meta name="theme-color" content="#111B47" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Calculadora do sono" />
        <meta
          property="og:title"
          content=" melhor horário para dormir - Calculadora do sono"
        />
        <meta
          property="og:description"
          content="Encontre o melhor o horário para dormir com a calculadora do sono, com ela você encontrará o melhor horário para dormir, acordar bem e ter um dia produtivo."
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Encontre o melhor o horário para dormir com a calculadora do sono, com ela você encontrará o melhor horário para dormir, acordar bem e ter um dia produtivo."
        />
        <meta
          name="keywords"
          content="o melhor horário para dormir, calculadora do sono, calculadora do sono online, calculadora de ciclo de sono, dormir bem, como encontrar o melhor horário para dormir, como acordar bem, como dormir no horário certo"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default withGA(process.env.GA, Router)(App);

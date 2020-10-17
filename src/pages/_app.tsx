/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import withGA from 'next-ga';
import { AppProps } from 'next/app';
import { hotjar } from 'react-hotjar';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/global';
import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    if (window.location.host.indexOf('localhost') === -1) {
      hotjar.initialize(2046781, 6);
    }
  });

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="Y8rEsYqusKR6yP2GDl1DOZErK_ffdPeFDX9vuwcfByQ"
        />
        <meta name="theme-color" content="#111B47" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Calculadora do sono" />
        <title>
          Encontre o melhor horário para dormir - Calculadora do sono
        </title>
        <meta
          property="og:title"
          content="Encontre o melhor horário para dormir - Calculadora do sono"
        />
        <meta
          property="og:description"
          content="Com a calculadora do sono você vai encontrar o melhor horário para dormir. Utilizando os ciclos do sono iremos indicar o horário ideial para você dormir e acordar bem para um dia mais produtivo."
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Com a calculadora do sono você vai encontrar o melhor horário para dormir. Utilizando os ciclos do sono iremos indicar o horário ideial para você dormir e acordar bem para um dia mais produtivo."
        />
        <meta
          name="keywords"
          content="que horas preciso ir dormir, que horas dormir para acordar as, que horas preciso ir dormir para acordar as, quantas horas preciso dormir, qual o melhor horário para dormir, calculadora do sono, calculadora do sono online, quantos ciclos de sono eu preciso, quantos ciclos de sono por noite, quantos ciclos de sono devemos dormir, quantos ciclos de sono temos"
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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          data-ad-client="ca-pub-8011413517971026"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default withGA(process.env.GA, Router)(App);

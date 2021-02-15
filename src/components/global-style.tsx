import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {createGlobalStyle} from 'styled-components';

import {darken} from '../utilities/styles';

export const GlobalStyleComponent = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
  }

  body, html, div, p, h1, h2, h3, h4, h5, h6, a, input, button {
    font-family: 'Baloo 2', Helvetica, Sans-Serif;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    &:hover {
      color: ${(props) => darken(props.theme.primary, 60)};
      text-decoration: underline;
    }
  }
`;

export function GlobalStyle() {
  const {i18n} = useTranslation();

  useEffect(() => {
    const script1 = document.createElement('script');

    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-RX1S5565FQ';
    script1.async = true;

    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  useEffect(() => {
    const script2 = document.createElement('script');

    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-RX1S5565FQ');
    `;

    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{lang: i18n.language}} />
      <GlobalStyleComponent />
    </>
  );
}

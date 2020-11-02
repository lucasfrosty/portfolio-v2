import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {createGlobalStyle} from 'styled-components';

import {colors, darken} from '../utilities/styles';

export const GlobalStyleComponent = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Baloo 2', Helvetica, Sans-Serif;
    height: 100vh;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;

    &:hover {
      color: ${darken(colors.primary, 60)};
      text-decoration: underline;
    }
  }
`;

export function GlobalStyle() {
  const {t, i18n} = useTranslation();

  return (
    <>
      <Helmet htmlAttributes={{lang: i18n.language}}>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyleComponent />
    </>
  );
}

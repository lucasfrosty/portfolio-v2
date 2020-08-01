import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

export const GlobalStyleComponent = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Baloo 2', Helvetica, Sans-Serif;
    height: 100vh;
  }
`;

export const globalWrapperMargin: React.CSSProperties = {
  margin: '0 auto',
  padding: 30,
  maxWidth: 1280,
};

export function GlobalStyle() {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyleComponent />
    </>
  )
}
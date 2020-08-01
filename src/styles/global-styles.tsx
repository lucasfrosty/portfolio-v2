import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

export const GlobalStyleComponent = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Baloo 2', Helvetica, Sans-Serif;
  }
`;

export const globalWrapperMargin: React.CSSProperties = {
  margin: '10px 5%',
  maxWidth: 960,
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
import React from 'react';
import styled from 'styled-components';

import {AppProvider} from '../foundations';
import '../utilities/i18n';

import {Header} from './header';
import {SocialMedias} from './SocialMedias';
import {GlobalStyle} from './GlobalStyle';

interface Props {
  children: React.ReactNode;
  paddingOverride?: string;
}

const ContentWrapper = styled.div`
  position: relative;
  margin-top: 70px;

  @media only screen and (max-width: 470px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1000px) {
    margin-bottom: 40px !important;
  }
`;

const LayoutWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 1280px;

  @media only screen and (max-width: 470px) {
    padding: 16px 12px;
  }
`;

export function Layout({children, paddingOverride}: Props) {
  return (
    <AppProvider>
      <GlobalStyle />
      <LayoutWrapper>
        <Header />
        <ContentWrapper
          style={{
            ...(paddingOverride && {padding: paddingOverride}),
          }}
        >
          <main>{children}</main>
          <SocialMedias />
        </ContentWrapper>
      </LayoutWrapper>
    </AppProvider>
  );
}

export default Layout;

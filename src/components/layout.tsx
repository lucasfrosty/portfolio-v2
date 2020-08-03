import React from 'react';
import styled from 'styled-components';

import '../utilities/i18n';
import {globalWrapperMargin, breakPointsInPx} from '../utilities/styles';

import {Header} from './header';
import {Circle} from './circle';
import {SocialMedias} from './social-medias';
import {GlobalStyle} from './global-style';

interface Props {
  children: React.ReactNode;
}

interface FixedPositionProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  adjustRightMultiplier?: boolean;
  disappearOnViewportWidth?: number;
  disappearOnViewportHeight?: number;
}

const FixedPosition = styled.div<FixedPositionProps>`
  position: fixed;
  bottom: ${(props) => `${props.bottom}px`};
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  right: ${(props) => `${props.right}px`};
  z-index: 2;

  @media only screen and (max-width: ${(props) =>
      props.disappearOnViewportWidth}px) {
    display: none;
  }

  @media only screen and (max-height: ${(props) =>
      props.disappearOnViewportHeight}px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 0 1.0875rem 1.45rem;
  position: relative;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 40px !important;
  }
`;

export function Layout({children}: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentWrapper style={globalWrapperMargin}>
        <main>{children}</main>
        <FixedPosition
          disappearOnViewportWidth={
            breakPointsInPx.layoutCirclesDisappear.width
          }
          top={-90}
          right={-130}
        >
          <Circle size={300} />
        </FixedPosition>
        <FixedPosition
          disappearOnViewportWidth={
            breakPointsInPx.layoutCirclesDisappear.width
          }
          disappearOnViewportHeight={
            breakPointsInPx.layoutCirclesDisappear.height
          }
          bottom={-200}
          left={-130}
        >
          <Circle size={300} />
        </FixedPosition>
        <SocialMedias />
      </ContentWrapper>
    </>
  );
}

export default Layout;

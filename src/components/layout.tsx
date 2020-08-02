import React from "react"

import { Header } from "./header"
import "../utilities/i18n"
import { GlobalStyle, globalWrapperMargin, breakPointsInPx } from "../styles"
import { Circle } from "./circle"
import { Social } from "./Social"
import styled from "styled-components"

interface Props {
  children: React.ReactNode
}

interface FixedPositionProps {
  top?: number
  right?: number
  bottom?: number
  left?: number
  adjustRightMultiplier?: boolean
  disappearOnViewportWidth?: number
  disappearOnViewportHeight?: number
}

const FixedPosition = styled.div<FixedPositionProps>`
  position: fixed;
  bottom: ${props => `${props.bottom}px`};
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  right: ${props => `${props.right}px`};
  z-index: -1;

  @media only screen and (max-width: ${props => props.disappearOnViewportWidth}px) {
    display: none;
  }

  @media only screen and (max-height: ${props => props.disappearOnViewportHeight}px) {
    display: none;
  }
`

const ContentWrapper = styled.div`
  padding: 0 1.0875rem 1.45rem;
  position: relative;
`

export function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentWrapper style={globalWrapperMargin}>
        <main>{children}</main>
        <FixedPosition
          disappearOnViewportWidth={breakPointsInPx.layoutCirclesDisappear.width}
          top={-90}
          right={-130}
        >
          <Circle size={300} />
        </FixedPosition>
        <FixedPosition
          disappearOnViewportWidth={breakPointsInPx.layoutCirclesDisappear.width}
          disappearOnViewportHeight={breakPointsInPx.layoutCirclesDisappear.height}
          bottom={-200}
          left={-130}
        >
          <Circle size={300} />
        </FixedPosition>
        <Social />
      </ContentWrapper>
    </>
  )
}

export default Layout

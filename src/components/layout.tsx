import React, { Suspense } from "react"

import { Header } from "./header"
import "../utilities/i18n"
import { GlobalStyle, globalWrapperMargin } from "../styles"
import { Circle } from "./circle"
import { Social } from "./Social"

interface Props {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Header />
      <div
        style={{
          ...globalWrapperMargin,
          padding: `0 1.0875rem 1.45rem`,
          position: "relative",
        }}
      >
        <main>{children}</main>
        <div style={{ position: "fixed", bottom: -150, left: -130 }}>
          <Circle size={300} />
        </div>
        <div style={{ position: "fixed", top: -90, right: -130 }}>
          <Circle size={300} />
        </div>
        <Social />
      </div>
    </Suspense>
  )
}

export default Layout

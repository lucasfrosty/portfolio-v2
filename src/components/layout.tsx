import React, { Suspense } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import '../utilities/i18n';
import { GlobalStyle, globalWrapperMargin } from "../styles";


interface Props {
  children: React.ReactNode,
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
        }}
      >
        <main>{children}</main>
      </div>
    </Suspense>
  )
}

export default Layout

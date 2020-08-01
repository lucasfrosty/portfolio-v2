import { Link } from "gatsby"
import React from "react"

import { Navbar, globalWrapperMargin } from "../styles"
import { Routes } from "../utilities"

interface LinkProperties {
  content: string
  url: Routes
}

export function Header() {
  const links: LinkProperties[] = [
    { content: "About me", url: Routes.Index },
    { content: "Blog", url: Routes.Blog },
  ];

  return (
    <Navbar>
      <div
        style={{
          ...globalWrapperMargin,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        {links.map(({content, url}) => (
          <Link
            to={url}
            style={{
              color: "#000",
              textDecoration: `none`,
              marginRight: 30,
              fontWeight: 600,
            }}
          >
            {content}
          </Link>
        ))}
      </div>
    </Navbar>
  )
}

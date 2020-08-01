import { Link } from "gatsby"
import React from "react"

import { Navbar, globalWrapperMargin } from "../styles"
import { Routes } from "../utilities"
import { useTranslation } from "react-i18next"
import { LanguageSwitcherButton } from "./language-switcher-button"

interface LinkProperties {
  content: string
  url: Routes
}

export function Header() {
  const {t} = useTranslation()
  const links: LinkProperties[] = [
    { content: t('aboutMe'), url: Routes.Index },
    { content: "Blog", url: Routes.Blog },
  ];

  return (
    <Navbar>
      <div
        style={{
          ...globalWrapperMargin,
          padding: `1.45rem 1.0875rem`,
          display: 'flex',
          minHeight: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
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
        <LanguageSwitcherButton />
      </div>
    </Navbar>
  )
}

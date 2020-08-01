import { Link } from "gatsby"
import React from "react"

import { Navbar, globalWrapperMargin } from "../styles"
import { Routes } from "../utilities"
import { useTranslation } from "react-i18next"
import { LanguageSwitcherButton } from "./language-switcher-button"
import styled from "styled-components"

interface LinkProperties {
  content: string
  url: Routes
  isActive: boolean
}

const color = "rgba(94,31,196,0.7)"

const StyledLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;
  margin-right: 30;
  font-weight: 600;
  padding-bottom: 5px;
  position: relative;

  &:not(:first-child) {
    margin-left: 30px;
  }

  ${props =>
    props.isActive
      ? `
      &::after {
      background-color: ${color}; 
      bottom: 0;
      content: '';
      display: block;
      height: 3px;
      left: 30%;
      position: absolute;
      transform: translate(-50%,0);
      width: 50%;
      }`
      : null}
`

export function Header() {
  const { t } = useTranslation()
  const links: LinkProperties[] = [
    {
      content: t("aboutMe"),
      url: Routes.Index,
      isActive: location.pathname === "/",
    },
    {
      content: "Blog",
      url: Routes.Blog,
      isActive: location.pathname === "/blog",
    },
  ]

  return (
    <Navbar>
      <div
        style={{
          ...globalWrapperMargin,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          minHeight: 40,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {links.map(({ content, url, isActive }) => (
            <StyledLink to={url} isActive={isActive}>
              {content}
            </StyledLink>
          ))}
        </div>
        <LanguageSwitcherButton />
      </div>
    </Navbar>
  )
}

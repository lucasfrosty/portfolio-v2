import { Link } from "gatsby"
import React from "react"

import { globalWrapperMargin, colors } from "../styles"
import { Routes } from "../utilities"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { LanguageSwitcherButton } from "./language-switcher-button"

interface LinkProperties {
  content: string
  url: Routes
  isActive: boolean
}

export const Navbar = styled.nav`
  font-size: 16px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  min-height: 40;
  align-items: center;
  justify-content: space-between;
`

const halfBorderBottom = `
  &::after {
    background-color: ${colors.primary}; 
    bottom: 0;
    content: '';
    display: block;
    height: 3px;
    left: 30%;
    position: absolute;
    transform: translate(-50%,0);
    width: 50%;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #383838;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 5px;
  position: relative;

  &:not(:first-child) {
    margin-left: 30px;
  }

  &:hover {
    color: ${colors.primary};
  }

  ${props => (props.isActive ? halfBorderBottom : null)}

  @media only screen and (max-width: 400px) {
    font-size: 13px;

    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`

const LanguageSwitcherWrapper = styled.span`
  display: flex;

  @media only screen and (min-width: 1450px) and (max-width: 1670px) {
    padding-right: 10%;
  }
`

export function Header() {
  const { t } = useTranslation()
  const links: LinkProperties[] = [
    {
      content: t("aboutMe"),
      url: Routes.Index,
      isActive: location.pathname === Routes.Index,
    },
    {
      content: "Blog",
      url: Routes.Blog,
      isActive: location.pathname === Routes.Blog,
    },
    {
      content: t("work"),
      url: Routes.Work,
      isActive: location.pathname === Routes.Work,
    },
  ]

  return (
    <Navbar style={globalWrapperMargin}>
      <div>
        {links.map(({ content, url, isActive }) => (
          <StyledLink to={url} isActive={isActive}>
            {content}
          </StyledLink>
        ))}
      </div>
      <LanguageSwitcherWrapper>
        <LanguageSwitcherButton />
      </LanguageSwitcherWrapper>
    </Navbar>
  )
}

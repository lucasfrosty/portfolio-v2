import React from "react"
import { useTranslation } from "react-i18next"

import BrazilFlag from "../images/brazil.png"
import USFlag from "../images/us.png"
import styled from "styled-components"

const ResetedButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;
  max-height: 32px;
  z-index: 10;
`

export function LanguageSwitcherButton() {
  const { i18n } = useTranslation()
  const isEnglish = i18n.language === "en"

  const buttonOptions = isEnglish
    ? {
        onClick: () => i18n.changeLanguage("pt"),
        children: <img src={BrazilFlag} />,
      }
    : {
        onClick: () => i18n.changeLanguage("en"),
        children: <img src={USFlag} />,
      }

  return <ResetedButton {...buttonOptions} />
}

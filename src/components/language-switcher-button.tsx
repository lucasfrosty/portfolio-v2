import React from 'react';
import {useTranslation} from 'react-i18next';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

export const query = graphql`
  query {
    USFlag: file(relativePath: {eq: "us.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    BRFlag: file(relativePath: {eq: "brazil.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

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
`;

const Wrapper = styled.span`
  display: flex;

  @media only screen and (min-width: 1450px) and (max-width: 1670px) {
    padding-right: 10%;
  }
`;

export function LanguageSwitcherButton() {
  const {BRFlag, USFlag} = useStaticQuery(query);
  const {i18n} = useTranslation();
  const isEnglish = i18n.language === 'en';

  const buttonOptions = isEnglish
    ? {
        onClick: () => i18n.changeLanguage('pt'),
        children: <Img fixed={USFlag.childImageSharp.fixed} />,
      }
    : {
        onClick: () => i18n.changeLanguage('en'),
        children: <Img fixed={BRFlag.childImageSharp.fixed} />,
      };

  return (
    <Wrapper>
      <ResetedButton role="button" {...buttonOptions} />
    </Wrapper>
  );
}

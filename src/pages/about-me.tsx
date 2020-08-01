import React from "react"
import { useTranslation, Trans } from "react-i18next"

import MenDog from "../images/men-dog.png"
import Me from "../images/me.jpg"
import ReactLogo from "../images/react.svg"
import ReduxLogo from "../images/redux.png"
import ApolloLogo from "../images/apollo.png"
import GraphQLLogo from "../images/graphql.png"
import RailsLogo from "../images/rails.png"
import MenWriting from "../images/men-writing.png"
import { Circle, Social } from "../components"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, breakPointsInPx } from "../styles"
import { Routes } from "../utilities"

const SectionWrapper = styled.div`
  display: flex;
  margin-top: 60px;

  @media only screen and (max-width: ${breakPointsInPx.aboutMe}px) {
    flex-direction: column;

    margin-top: 0;
  }
`

const DescriptionWrapper = styled.div`
  width: 100%;
  
  @media only screen and (min-width: ${breakPointsInPx.aboutMe}px) {
    max-width: 500px;
  }

  @media only screen and (max-width: ${breakPointsInPx.aboutMe}px) {
    order: 2;
    padding-bottom: 40px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${breakPointsInPx.aboutMe}px) {
    order: 1;
    margin-bottom: 40px;
  }
`

const RoundedImage = styled.img`
  border-radius: 100%;
  border: 3px solid white;
  box-shadow: 14px 19px 0px 5px ${colors.primary};
  width: 400px;
  max-width: 400px;
  max-height: 400px;

  @media only screen and (max-width: 500px) {
    width: 350px;
  }

  @media only screen and (max-width: 400px) {
    width: 250px;
  }
`

const NameHeader = styled.h1`
  font-weight: 600;
  margin-bottom: 0;
  color: ${colors.primary};
`

const Text = styled.p<{caption?: boolean}>`
  color: #464646;
  margin: 0;
  font-size: ${props => props.caption ? 15 : 18}px;
`
interface SkillLogo {
  src: string
  width?: number
  height?: number
  marginLeft?: number
  alt: string
}

const LogoImg = styled.img<Omit<SkillLogo, "src">>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  margin-left: ${props => `${props.marginLeft}px`};
`

const SecondHeader = styled.h2`
  color: ${colors.primary};
`

const skillListLogos: SkillLogo[] = [
  { src: ReactLogo, width: 35, marginLeft: 0, alt: "React.js logo" },
  { src: ReduxLogo, marginLeft: 13, alt: "Redux logo" },
  { src: GraphQLLogo, alt: "GraphQL logo" },
  { src: ApolloLogo, marginLeft: 11, alt: "Apollo logo" },
  { src: RailsLogo, marginLeft: 8, alt: "Ruby on Rails logo" },
]

export default function AboutMe() {
  const { t, i18n } = useTranslation()

  const shopifyLink =
    i18n.language === "pt"
      ? "https://www.shopify.com.br"
      : "https://www.shopify.com"

  return (
    <SectionWrapper>
      <DescriptionWrapper>
        <NameHeader>Lucas Ferreira</NameHeader>
        <Text>{t("description")}</Text>
        <Text>
          <Trans i18nKey="description2">
            I'm from Brazil but currently i'm based in Ottawa, Canada working at <Link target="_blank" to={shopifyLink}>Shopify</Link>.
          </Trans>
        </Text>
        <Text style={{ marginTop: 30 }}>{t("description3")}</Text>

        <div style={{ marginTop: 80 }}>
          <SecondHeader>{t("skills")}</SecondHeader>
          <div>
            <div>
              {skillListLogos.map(
                ({ src, width = 32, height = 32, marginLeft = 15, alt }) => (
                  <LogoImg
                    src={src}
                    alt={alt}
                    marginLeft={marginLeft}
                    width={width}
                    height={height}
                  />
                )
              )}
            </div>
            <div style={{marginTop: 25}}>
              <Text caption>
                <Trans i18nKey="workDescription">
                  Those are the main technologies i'm using right now, but i'm
                  always open to learn and explore new ones. For more
                  information check out <Link to={Routes.Work}>Work</Link>.
                </Trans>
              </Text>
            </div>
          </div>
        </div>
      </DescriptionWrapper>
      <ImageWrapper>
        <RoundedImage src={Me} />
      </ImageWrapper>
    </SectionWrapper>
  )
}

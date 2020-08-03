import React from 'react';
import {useTranslation, Trans} from 'react-i18next';
import Img, {FixedObject} from 'gatsby-image';
import {Link, graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';

import {colors, breakPointsInPx} from '../utilities/styles';
import {Route} from '../utilities/routes';
import {SEO, Text} from '../components';

const SectionWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  @media only screen and (max-width: ${breakPointsInPx.aboutMe}px) {
    flex-direction: column;

    margin-top: 0;
  }
`;

const DescriptionWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: ${breakPointsInPx.aboutMe}px) {
    max-width: 500px;
  }

  @media only screen and (max-width: ${breakPointsInPx.aboutMe}px) {
    order: 2;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${breakPointsInPx.aboutMe}px) {
    order: 1;
    margin-bottom: 40px;
  }
`;
const RoundedImage = styled((props) => <Img {...props} />)`
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
`;

const NameHeader = styled.h1`
  font-weight: 600;
  margin-bottom: 0;
  color: ${colors.primary};
`;
interface SkillLogo {
  fixed: FixedObject;
  width?: number;
  height?: number;
  marginLeft?: number;
  alt: string;
}

const SecondHeader = styled.h2`
  color: ${colors.primary};
`;

const SpacedComponent = styled.div<{margin: string; atBreakpoint?: number}>`
  margin: ${(props) => (props.atBreakpoint ? 0 : props.margin || 0)};

  @media only screen and (max-width: ${(props) => props.atBreakpoint}px) {
    margin: ${(props) => props.margin};
  }
`;

export const query = graphql`
  query {
    ReactLogo: file(relativePath: {eq: "react.png"}) {
      childImageSharp {
        fixed(width: 35, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ReduxLogo: file(relativePath: {eq: "redux.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    GraphQLLogo: file(relativePath: {eq: "graphql.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ApolloLogo: file(relativePath: {eq: "apollo.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    RailsLogo: file(relativePath: {eq: "rails.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    Me: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default function AboutMe() {
  const {t, i18n} = useTranslation();
  const {
    ReactLogo,
    ReduxLogo,
    GraphQLLogo,
    ApolloLogo,
    RailsLogo,
    Me,
  } = useStaticQuery(query);

  const skillListLogos: SkillLogo[] = [
    {
      fixed: ReactLogo.childImageSharp.fixed,
      marginLeft: 0,
      alt: 'React.js logo',
    },
    {
      fixed: ReduxLogo.childImageSharp.fixed,
      marginLeft: 13,
      alt: 'Redux logo',
    },
    {fixed: GraphQLLogo.childImageSharp.fixed, alt: 'GraphQL logo'},
    {
      fixed: ApolloLogo.childImageSharp.fixed,
      marginLeft: 11,
      alt: 'Apollo logo',
    },
    {
      fixed: RailsLogo.childImageSharp.fixed,
      marginLeft: 8,
      alt: 'Ruby on Rails logo',
    },
  ];

  const shopifyLink =
    i18n.language === 'pt'
      ? 'https://www.shopify.com.br'
      : 'https://www.shopify.com';

  /* eslint-disable */
  const translatedDescription2 = (
    <Trans i18nKey="description2">
      I'm from Brazil but currently i'm based in Ottawa, Canada working at
      <Link target="_blank" to={shopifyLink}>
        Shopify
      </Link>
      .
    </Trans>
  );

  const translatedWorkDescription = (
    <Trans i18nKey="workDescription">
      Those are the main technologies i'm using right now, but i'm always open
      to learn and explore new ones. For more information check out
      <Link to={Route.Work}>Work</Link>.
    </Trans>
  );
  /* eslint-enable */

  return (
    <>
      <SEO title={t('aboutMePageTitle')} />
      <SectionWrapper>
        <DescriptionWrapper>
          <NameHeader>Lucas Ferreira</NameHeader>
          <Text>{t('description')}</Text>
          <SpacedComponent margin="25px 0 0 0" atBreakpoint={550}>
            <Text>{translatedDescription2}</Text>
          </SpacedComponent>
          <SpacedComponent margin="30px 0 0 0">
            <Text>{t('description3')}</Text>
          </SpacedComponent>
          <SpacedComponent margin="80px 0 0 0">
            <SecondHeader>{t('skills')}</SecondHeader>
            <div>
              <div>
                {skillListLogos.map(({fixed, marginLeft = 15, alt}) => (
                  <Img alt={alt} key={alt} fixed={fixed} style={{marginLeft}} />
                ))}
              </div>
              <SpacedComponent margin="25px 0 0 0">
                <Text caption>{translatedWorkDescription}</Text>
              </SpacedComponent>
            </div>
          </SpacedComponent>
        </DescriptionWrapper>
        <ImageWrapper>
          <RoundedImage fixed={Me.childImageSharp.fixed} alt="My photo" />
        </ImageWrapper>
      </SectionWrapper>
    </>
  );
}

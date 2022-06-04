import React from 'react';
import {useTranslation, Trans} from 'react-i18next';
import Img from 'gatsby-image';
import type {FixedObject} from 'gatsby-image';
import {Link, graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';

import {breakPointsInPx} from '../utilities/styles';
import {Route} from '../utilities/routes';
import {SEO, Text, Layout, SpacedWrapper, SecondHeader} from '../components';

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
  border: 3px solid ${(props) => props.theme.inverseBorder};
  box-shadow: 7px 13px 0px 2px ${(props) => props.theme.primary};
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
  color: ${(props) => props.theme.primary};
`;

interface SkillLogo {
  fixed: FixedObject;
  width?: number;
  height?: number;
  marginLeft?: number;
  alt: string;
  url: string;
}

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
      url: 'https://reactjs.org/',
    },
    {
      fixed: ReduxLogo.childImageSharp.fixed,
      marginLeft: 13,
      alt: 'Redux logo',
      url: 'https://redux.js.org/',
    },
    {
      fixed: GraphQLLogo.childImageSharp.fixed,
      alt: 'GraphQL logo',
      url: 'https://graphql.org/',
    },
    {
      fixed: ApolloLogo.childImageSharp.fixed,
      marginLeft: 11,
      alt: 'Apollo logo',
      url: 'https://www.apollographql.com/',
    },
    {
      fixed: RailsLogo.childImageSharp.fixed,
      marginLeft: 8,
      alt: 'Ruby on Rails logo',
      url: 'https://rubyonrails.org/',
    },
  ];

  const shopifyLink =
    i18n.language === 'pt'
      ? 'https://www.shopify.com.br'
      : 'https://www.shopify.com';

  /* eslint-disable */
  const translatedDescription2 = (
    <Trans i18nKey="description2">
      I'm from Brazil but currently i'm based in Toronto, Canada working at
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
      <Layout>
        <SectionWrapper>
          <DescriptionWrapper>
            <NameHeader>Lucas Ferreira</NameHeader>
            <Text>{t('description')}</Text>
            <SpacedWrapper margin="25px 0 0 0" atBreakpoint={550}>
              <Text>{translatedDescription2}</Text>
            </SpacedWrapper>
            <SpacedWrapper margin="30px 0 0 0">
              <Text>{t('description3')}</Text>
            </SpacedWrapper>
            <SpacedWrapper margin="80px 0 0 0">
              <SecondHeader>{t('skills')}</SecondHeader>
              <div>
                <div>
                  {skillListLogos.map(({url, fixed, marginLeft = 15, alt}) => (
                    <a href={url} target="_blank" rel="noreferrer" key={alt}>
                      <Img alt={alt} fixed={fixed} style={{marginLeft}} />
                    </a>
                  ))}
                </div>
                <SpacedWrapper margin="25px 0 0 0">
                  <Text caption>{translatedWorkDescription}</Text>
                </SpacedWrapper>
              </div>
            </SpacedWrapper>
          </DescriptionWrapper>
          <ImageWrapper>
            <RoundedImage fixed={Me.childImageSharp.fixed} alt="My photo" />
          </ImageWrapper>
        </SectionWrapper>
      </Layout>
    </>
  );
}

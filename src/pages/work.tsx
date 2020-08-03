import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Layout, Text, Title, SEO} from '../components';

export const query = graphql`
  query {
    MenWorking: file(relativePath: {eq: "men-working.png"}) {
      childImageSharp {
        fixed(width: 550) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const ImageWrapper = styled.div`
  z-index: 1;
  margin: auto;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TextWrapper = styled.div`
  max-width: 600px;
`;

export default function Blog() {
  const {t} = useTranslation();
  const {MenWorking} = useStaticQuery(query);

  return (
    <Layout>
      <SEO title={t('work')} />
      <Wrapper>
        <TextWrapper>
          <Title>Work</Title>
          <Text>Work list</Text>
        </TextWrapper>
        <ImageWrapper>
          <Img fixed={MenWorking.childImageSharp.fixed} />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}

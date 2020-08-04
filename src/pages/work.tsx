import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Layout, Title, SEO, JobDetails} from '../components';
import {useWorkData} from '../utilities/work-data';

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
  margin-bottom: 40px;
`;

const TextWrapper = styled.div`
  max-width: 480px;
  width: 100%;
`;

export default function Blog() {
  const {t} = useTranslation();
  const {MenWorking} = useStaticQuery(query);
  const {shopify, firstI} = useWorkData();

  return (
    <Layout>
      <SEO title={t('work')} />
      <Wrapper>
        <TextWrapper>
          <Title>{t('work')}</Title>
          {[shopify, firstI].map((company) => (
            <JobDetails company={company} key={company.name} />
          ))}
        </TextWrapper>
        <ImageWrapper>
          <Img fixed={MenWorking.childImageSharp.fixed} />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}

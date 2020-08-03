import React from 'react';
import styled from 'styled-components';
import {useTranslation, Trans} from 'react-i18next';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {Layout, Text, Post, SpacedWrapper} from '../components';
import {colors} from '../utilities/styles';
import {posts} from '../utilities/posts';

const Title = styled.h1`
  color: ${colors.primary};
`;

export const query = graphql`
  query {
    MenWriting: file(relativePath: {eq: "men-writing.png"}) {
      childImageSharp {
        fixed(width: 350) {
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
  const {t, i18n} = useTranslation();
  const {MenWriting} = useStaticQuery(query);

  const textAboutTranslation = i18n.language === 'en' && (
    <span>
      But if you don&apos;t speak Portuguese and still want to check out my
      posts, you can use the google translator for that, i&apos;m confident it
      works well enough to understand the core concepts the articles talk about.
    </span>
  );

  return (
    <Layout>
      <Wrapper>
        <TextWrapper>
          <Title>Blog</Title>
          <Text>
            <Trans i18nKey="whyMedium">
              I&apos;m too lazy to implement a blog myself so i&apos;ll be doing
              my posts on
              <Link to="https://medium.com/@lucasfrosty">Medium</Link>.
            </Trans>
          </Text>

          <Text style={{margin: '20px 0'}}>
            {t('reasonToWriteInPortuguese')} {textAboutTranslation}
          </Text>

          <SpacedWrapper margin="40px 0 0 0">
            {posts.map((post) => (
              <Post key={post.title} {...post} />
            ))}
          </SpacedWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Img fixed={MenWriting.childImageSharp.fixed} />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}

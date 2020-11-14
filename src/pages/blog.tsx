import React from 'react';
import styled from 'styled-components';
import {useTranslation, Trans} from 'react-i18next';

import {Layout, Text, Post, SpacedWrapper, Title, SEO} from '../components';
import {posts} from '../utilities/posts';
import {Plan} from '../icons';

const ImageWrapper = styled.div`
  z-index: 1;
  margin: auto;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 30px;

    > svg {
      width: 350px;
      height: 350px;
    }
  }

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

  const textAboutTranslation = i18n.language === 'en' && (
    <span>
      But if you don&apos;t speak Portuguese and still want to check out my
      posts, you can use the google translator for that, i&apos;m confident it
      works well enough to understand the core concepts the articles talk about.
    </span>
  );

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <TextWrapper>
          <Title>Blog</Title>
          <Text>
            <Trans i18nKey="whyMedium">
              I&apos;m too lazy to implement a blog myself so i&apos;ll be doing
              my posts on
              <a
                href="https://medium.com/@lucasfrosty"
                rel="noreferrer"
                target="_blank"
              >
                Medium
              </a>
              .
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
          <Plan width="400" height="400" />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}

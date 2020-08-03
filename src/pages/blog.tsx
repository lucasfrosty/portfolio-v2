import React from 'react';
import styled from 'styled-components';
import {useTranslation, Trans} from 'react-i18next';
import {Link} from 'gatsby';

import {Layout, Text, Post} from '../components';
import {colors} from '../utilities/styles';
import {posts} from '../utilities/posts';

const Title = styled.h1`
  color: ${colors.primary};
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
      <Title>Blog</Title>
      <Text>
        <Trans i18nKey="whyMedium">
          I&apos;m too lazy to implement a blog myself so i&apos;ll be doing my
          posts on <Link to="https://medium.com/@lucasfrosty">Medium</Link>.
        </Trans>
      </Text>

      <Text>
        {t('reasonToWriteInPortuguese')} {textAboutTranslation}
      </Text>

      <div>
        {posts.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </div>
    </Layout>
  );
}

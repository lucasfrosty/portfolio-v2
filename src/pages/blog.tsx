import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

import {
  Layout,
  Post,
  SpacedWrapper,
  Title,
  SEO,
  SecondHeader,
  Newsletter,
} from '../components';
import {postsFromMedium, useLocalizedPosts} from '../utilities/posts';
import {Plan} from '../icons';
import {formatGatsbyDateFormatToBlogFormat} from '../utilities/dates';
import {addFullPathToSubpath} from '../utilities/routes';

const ImageWrapper = styled.div`
  z-index: 1;
  margin: auto;

  @media only screen and (max-width: 1200px) {
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

  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 600px;
`;

export default function Blog() {
  const {t} = useTranslation();
  const postsFromGatsby = useLocalizedPosts();

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <TextWrapper>
          <Title>Blog</Title>

          <SpacedWrapper margin="10px 0 80px 0">
            {postsFromGatsby.map(({title, slug, date}) => (
              <Post
                key={title}
                title={title}
                url={addFullPathToSubpath(slug)}
                date={formatGatsbyDateFormatToBlogFormat(date)}
              />
            ))}
          </SpacedWrapper>

          <SecondHeader style={{lineHeight: 1.3}} margin="12px 0">
            {t('mediumPosts')}
          </SecondHeader>

          <SpacedWrapper margin="10px 0 0 0">
            {postsFromMedium.map((post) => (
              <Post key={post.title} {...post} external />
            ))}
          </SpacedWrapper>

          <SpacedWrapper margin="60px 0 0 0">
            <Newsletter />
          </SpacedWrapper>
        </TextWrapper>
        <ImageWrapper>
          <Plan width="400" height="400" />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}

import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import {useTranslation} from 'react-i18next';

import {
  Layout,
  Text,
  Post,
  SpacedWrapper,
  Title,
  SEO,
  SecondHeader,
  Divider,
  Newsletter,
} from '../components';
import {postsFromMedium} from '../utilities/posts';
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

export const postsQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "YYYY-DD-MM")
          slug
          title
        }
      }
    }
  }
`;

export default function Blog() {
  const {t} = useTranslation();
  const {
    allMarkdownRemark: {nodes: postsFromGatsby},
  } = useStaticQuery(postsQuery);

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <TextWrapper>
          <Title>Blog</Title>

          <SpacedWrapper margin="10px 0 80px 0">
            {postsFromGatsby.map(({frontmatter}: any) => (
              <Post
                key={frontmatter.title}
                title={frontmatter.title}
                url={addFullPathToSubpath(frontmatter.slug)}
                date={formatGatsbyDateFormatToBlogFormat(frontmatter.date)}
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

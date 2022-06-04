import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {graphql} from 'gatsby';

import {Layout, Newsletter, SEO, SpacedWrapper} from '../components';

import './blog-template.css';
import {useLocation} from '@reach/router';
import {PostLanguageSwitchCard} from '../components';

const Wrapper = styled.div`
  margin: auto;
  max-width: 630px;

  h1,
  h2,
  h3 {
    line-height: 1.3;
  }

  pre {
    color: #fff;
  }

  code {
    font-size: 14px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.primary};
`;

const PostWrapper = styled.div`
  color: ${(props) => props.theme.text};

  font-size: 20px;

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }

  img {
    display: block;
    margin: auto;

    width: 100%;

    max-width: 340px;

    text-align: center;
  }

  hr {
    border: 1px solid ${(props) => props.theme.border};
  }

  pre {
    font-size: 12px;
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        thumbnail
        subject
        description
      }
    }
  }
`;

export default function Template({
  data: {
    markdownRemark: {frontmatter, html},
  },
}: any) {
  const {i18n} = useTranslation();
  const routeLocation = useLocation();
  const slugLanguage = frontmatter.slug.includes('/en/') ? 'en' : 'pt';

  const isLanguageDifferentThanPostLanguage = i18n.language !== slugLanguage;

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        pathname={routeLocation.pathname}
        meta={[
          {
            name: 'image',
            property: 'og:image',
            content: frontmatter.thumbnail,
          },
          {
            property: 'og:image:width',
            content: 200,
          },
          {
            property: 'og:image:height',
            content: 200,
          },
          {
            property: 'twitter:image',
            content: frontmatter.thumbnail,
          },
          {
            property: 'article:section',
            content: frontmatter.subject,
          },
          {
            property: 'article:published_time',
            content: frontmatter.date,
          },
          {
            property: 'twitter:image',
            content: frontmatter.thumbnail,
          },
        ]}
      />
      <Layout>
        <Wrapper>
          {isLanguageDifferentThanPostLanguage && (
            <PostLanguageSwitchCard url={frontmatter.slug} />
          )}
          <Title>{frontmatter.title}</Title>
          <PostWrapper dangerouslySetInnerHTML={{__html: html}} />
        </Wrapper>
      </Layout>
    </>
  );
}

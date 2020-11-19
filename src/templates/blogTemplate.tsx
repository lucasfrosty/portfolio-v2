import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import {Layout, Newsletter, SEO, SpacedWrapper} from '../components';

import './blog-template.css';

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
      }
    }
  }
`;

export default function Template({
  data: {
    markdownRemark: {frontmatter, html},
  },
}: any) {
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Wrapper>
        <Title>{frontmatter.title}</Title>
        {/* <h2>{frontmatter.date}</h2> */}
        <PostWrapper dangerouslySetInnerHTML={{__html: html}} />
        <SpacedWrapper margin="32px 0 0 0">
          <Newsletter />
        </SpacedWrapper>
      </Wrapper>
    </Layout>
  );
}

import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {graphql} from 'gatsby';

import {Layout} from '../components';

const PostWrapper = styled.div`
  color: ${(props) => props.theme.text};
`;

export default function Template({
  data: {
    markdownRemark: {frontmatter, html},
  },
}: any) {
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <PostWrapper dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </div>
    </Layout>
  );
}

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

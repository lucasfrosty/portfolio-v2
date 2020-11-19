import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

import {AccessibleLink, Props as AccessibleLinkProps} from './accessible-link';

const SocialWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 30px;
  padding: 5px 10px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;

  @media only screen and (max-width: 1000px) {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -9px 20px 39px -7px rgba(0, 0, 0, 0.2);
  }

  & > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const query = graphql`
  query {
    GithubLogo: file(relativePath: {eq: "github.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    LinkedinLogo: file(relativePath: {eq: "linkedin.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    InstagramLogo: file(relativePath: {eq: "instagram.png"}) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export function SocialMedias() {
  const {GithubLogo, LinkedinLogo, MediumLogo, InstagramLogo} = useStaticQuery(
    query,
  );

  const socialMedias: AccessibleLinkProps[] = [
    {
      fixed: GithubLogo.childImageSharp.fixed,
      description: 'Opens my github page in a new tab',
      url: 'https://github.com/lucasfrosty',
    },
    {
      fixed: LinkedinLogo.childImageSharp.fixed,
      description: 'Opens my linkedin page in a new tab',
      url: 'https://www.linkedin.com/in/lucasfrosty/',
    },
    {
      fixed: InstagramLogo.childImageSharp.fixed,
      description: 'Opens my instagram page in a new tab',
      url: 'https://www.instagram.com/lucasfrosty/',
    },
  ];

  return (
    <SocialWrapper>
      {socialMedias.map((media) => (
        <AccessibleLink key={media.description} {...media} />
      ))}
    </SocialWrapper>
  );
}

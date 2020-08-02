import React from "react"
import { AccessibleLink, Props as AccessibleLinkProps } from "./accessible-link"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';


const SocialWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 30px;
  padding: 5px 10px;
  display: flex;

  @media only screen and (max-width: 1000px) {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -9px 20px 39px -7px rgba(0, 0, 0, 0.2);
  }

  & > :not(:first-child) {
    padding-left: 10px;
  }
`

export const query = graphql`
  query {
    GithubLogo: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    LinkedinLogo: file(relativePath: { eq: "linkedin.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    MediumLogo: file(relativePath: { eq: "medium.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    InstagramLogo: file(relativePath: { eq: "instagram.png" }) {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export function Social() {
  const { GithubLogo, LinkedinLogo, MediumLogo, InstagramLogo } = useStaticQuery(query)

  const socialMedias: AccessibleLinkProps[] = [
    {
      fixed: GithubLogo.childImageSharp.fixed,
      description: "Opens my github page in a new tab",
      url: "https://github.com/lucasfrosty",
    },
    {
      fixed: LinkedinLogo.childImageSharp.fixed,
      description: "Opens my linkedin page in a new tab",
      url: "https://www.linkedin.com/in/lucasfrosty/",
    },
    {
      fixed: MediumLogo.childImageSharp.fixed,
      description: "Opens my medium page in a new tab",
      url: "https://medium.com/@lucasfrosty",
    },
    {
      fixed: InstagramLogo.childImageSharp.fixed,
      description: "Opens my instagram page in a new tab",
      url: "https://www.instagram.com/lucasfrosty/",
    },
  ]
  
  return (
    <SocialWrapper>
      {socialMedias.map(media => (
        <AccessibleLink key={media.description} {...media} />
      ))}
    </SocialWrapper>
  )
}

import React from "react"
import { AccessibleLink, Props as AccessibleLinkProps } from "./accessible-link"
import GithubLogo from "../images/github.png"
import MediumLogo from "../images/medium.png"
import LinkedinLogo from "../images/linkedin.png"
import InstagramLogo from "../images/instagram.png"
import styled from 'styled-components';

const SocialWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 30px;
  padding: 5px 10px;
  display: flex;
  
  @media only screen and (max-width: 1000px) {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -9px 20px 39px -7px rgba(0,0,0,0.20);
  }

  & > :not(:first-child) {
    padding-left: 10px; 
  }
`

export function Social() {
  const socialMedias: AccessibleLinkProps[] = [
    { src: GithubLogo, description: "Opens my github page in a new tab", url: 'https://github.com/lucasfrosty' },
    { src: LinkedinLogo, description: "Opens my linkedin page in a new tab", url: 'https://www.linkedin.com/in/lucasfrosty/' },
    { src: MediumLogo, description: "Opens my medium page in a new tab", url: 'https://medium.com/@lucasfrosty' },
    { src: InstagramLogo, description: "Opens my instagram page in a new tab", url: 'https://www.instagram.com/lucasfrosty/' },
  ]

  return (
    <SocialWrapper>
      {socialMedias.map(media => (
        <AccessibleLink key={media.description} {...media} />
      ))}
    </SocialWrapper>
  )
}

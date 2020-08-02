import React from "react"
import { VisuallyHidden } from "../styles"
import styled from "styled-components";
import Img, { FixedObject } from "gatsby-image"

export interface Props {
  fixed: FixedObject;
  description: string;
  url: string;
}

const Link = styled.a`
  display: flex;
  align-items: center;
`

export function AccessibleLink({ fixed, description, url }: Props) {
  return (
    <Link id="menu-trigger" target="_blank" href={url}>
      <Img aria-hidden fixed={fixed} />
      <VisuallyHidden>{description}</VisuallyHidden>
    </Link>
  );
}

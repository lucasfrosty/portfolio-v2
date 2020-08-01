import React from "react"
import { VisuallyHidden } from "../styles"
import styled from "styled-components";

export interface Props {
  src: any;
  description: string;
  url: string;
}

const Link = styled.a`
  display: flex;
  align-items: center;
`

export function AccessibleLink({ src, description, url }: Props) {
  return (
    <Link id="menu-trigger" target="_blank" href={url}>
      <img aria-hidden={true} width={32} height={32} src={src} />
      <VisuallyHidden>{description}</VisuallyHidden>
    </Link>
  );
}

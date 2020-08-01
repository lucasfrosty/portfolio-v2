import React from "react"
import { VisuallyHidden } from "../styles"

export interface Props {
  src: any;
  description: string;
  url: string;
}

export function AccessibleLink({ src, description, url }: Props) {
  return (
    <a id="menu-trigger" target="_blank" href={url}>
      <img aria-hidden={true} width={32} height={32} src={src} />
      <VisuallyHidden>{description}</VisuallyHidden>
    </a>
  );
}

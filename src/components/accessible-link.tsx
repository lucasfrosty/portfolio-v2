import React from 'react';
import styled from 'styled-components';
import Img, {FixedObject} from 'gatsby-image';

import {VisuallyHidden} from './visually-hidden';

export interface Props {
  fixed: FixedObject;
  description: string;
  url: string;
}

const Link = styled.a`
  display: flex;
  align-items: center;
`;

export function AccessibleLink({fixed, description, url}: Props) {
  return (
    <Link target="_blank" rel="noreferrer" href={url}>
      <Img aria-hidden fixed={fixed} />
      <VisuallyHidden>{description}</VisuallyHidden>
    </Link>
  );
}

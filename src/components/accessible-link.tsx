import React from 'react';
import styled from 'styled-components';
import Img, {FixedObject} from 'gatsby-image';
import {OutboundLink} from 'gatsby-plugin-google-analytics';

import {VisuallyHidden} from './visually-hidden';

export interface Props {
  fixed: FixedObject;
  description: string;
  url: string;
}

const StyledOutboundLink = styled(OutboundLink)`
  display: flex;
  align-items: center;
`;

export function AccessibleLink({fixed, description, url}: Props) {
  return (
    <StyledOutboundLink target="_blank" rel="noreferrer" href={url}>
      <Img aria-hidden fixed={fixed} />
      <VisuallyHidden>{description}</VisuallyHidden>
    </StyledOutboundLink>
  );
}

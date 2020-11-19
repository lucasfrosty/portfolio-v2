import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {OutboundLink} from 'gatsby-plugin-google-analytics';

import {MediumPost} from '../utilities/posts';
import {i18n} from '../utilities/i18n';
import {useCurrentThemeProperties} from '../utilities/theme';
import {Calendar} from '../icons';

import {Text} from './text';

const ComponentWrapper = styled.div`
  margin-bottom: 20px;
  border-left: 1px solid ${(props) => props.theme.border};
  font-size: 17px;

  line-height: 1.35;
  padding: 4px 0 4px 12px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: end;

  & > p {
    margin: 0 0 0 4px;
    font-size: 13px;
  }

  path {
    fill: ${(props) => props.theme.highlight};
  }
`;

interface Props extends MediumPost {
  external?: boolean;
}

export function Post({date, title, url, external = false}: Props) {
  const {primary} = useCurrentThemeProperties();

  return (
    <ComponentWrapper>
      {linkMarkup()}
      <DateWrapper>
        <Calendar width="15" height="15" />
        <Text highlight>
          {date.toLocaleDateString(i18n.language, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Text>
      </DateWrapper>
    </ComponentWrapper>
  );

  function linkMarkup() {
    const sharedProps = {
      style: {color: primary},
    };

    if (external) {
      return (
        <OutboundLink
          target="_blank"
          rel="noreferrer"
          href={url}
          {...sharedProps}
        >
          {title}
        </OutboundLink>
      );
    }

    return (
      <Link to={url} {...sharedProps}>
        {title}
      </Link>
    );
  }
}

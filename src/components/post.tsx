import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import {MediumPost} from '../utilities/posts';
import {i18n} from '../utilities/i18n';
import {useCurrentThemeProperties} from '../utilities/theme';

import {Text} from './text';

export const query = graphql`
  query {
    Calendar: file(relativePath: {eq: "calendar.png"}) {
      childImageSharp {
        fixed(width: 14, height: 14) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const ComponentWrapper = styled.div`
  margin-bottom: 20px;
  border-left: 1px dashed ${(props) => props.theme.text};
  padding-left: 10px;
  font-size: 17px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;

  & > p {
    margin: 0 0 0 5px;
    font-size: 13px;
  }
`;

interface Props extends MediumPost {}

export function Post({date, title, url}: Props) {
  const {Calendar} = useStaticQuery(query);
  const {link} = useCurrentThemeProperties();

  return (
    <ComponentWrapper>
      <a style={{color: link}} target="_blank" rel="noreferrer" href={url}>
        {title}
      </a>
      <DateWrapper>
        <Img
          imgStyle={{ariaHidden: true}}
          fixed={Calendar.childImageSharp.fixed}
        />
        <Text>
          {date.toLocaleDateString(i18n.language, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Text>
      </DateWrapper>
    </ComponentWrapper>
  );
}

import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import {MediumPost} from '../utilities/posts';
import {i18n} from '../utilities/i18n';
import {colors} from '../utilities/styles';

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
  border-left: 1px dashed ${colors.text};
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

  return (
    <ComponentWrapper>
      <Link target="_blank" to={url}>
        {title}
      </Link>
      <DateWrapper>
        <Img
          imgStyle={{ariaHidden: true}}
          fixed={Calendar.childImageSharp.fixed}
        />
        <p>
          {date.toLocaleDateString(i18n.language, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </DateWrapper>
    </ComponentWrapper>
  );
}

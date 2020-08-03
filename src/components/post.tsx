import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

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

interface Props extends MediumPost {}

export function Post({date, title, url}: Props) {
  const {Calendar} = useStaticQuery(query);

  return (
    <div
      style={{
        marginBottom: 20,
        borderLeft: `1px dashed ${colors.text}`,
        paddingLeft: 10,
        fontSize: 17,
      }}
    >
      <Link to={url}>{title}</Link>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Img
          imgStyle={{ariaHidden: true}}
          fixed={Calendar.childImageSharp.fixed}
        />
        <p style={{margin: '0 0 0 5px', fontSize: 13}}>
          {date.toLocaleDateString(i18n.language, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
}

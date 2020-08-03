import React from 'react';
import {Link} from 'gatsby';

import {MediumPost} from '../utilities/posts';
import {i18n} from '../utilities/i18n';

interface Props extends MediumPost {}

export function Post({date, title, url}: Props) {
  return (
    <div>
      <Link to={url}>{title}</Link>
      <div>
        {date.toLocaleDateString(i18n.language, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </div>
    </div>
  );
}

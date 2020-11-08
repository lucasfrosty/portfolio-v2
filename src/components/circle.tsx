import React from 'react';

import {useThemeProperties} from '../utilities/theme';

interface Props {
  size: number;
}

export function Circle({size}: Props) {
  const {primary} = useThemeProperties();
  const sizeString = String(size);

  return (
    <svg height={sizeString} width={sizeString}>
      <circle cx="50%" cy="50%" r={String(size / 2)} fill={primary} />
    </svg>
  );
}

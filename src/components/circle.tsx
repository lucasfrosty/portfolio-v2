import React from 'react';

import {colors} from '../styles';

interface Props {
  size: number;
}

export function Circle({size}: Props) {
  const sizeString = String(size);
  return (
    <svg height={sizeString} width={sizeString}>
      <circle cx="50%" cy="50%" r={String(size / 2)} fill={colors.primary} />
    </svg>
  );
}

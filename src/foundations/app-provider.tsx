import React from 'react';

import {isSSR} from '../utilities/constants';

import {ThemeProvider} from './ThemeProvider';
import {FontFaceProvider} from './FontFaceProvider';

interface Props {
  children: React.ReactNode;
}

export function AppProvider({children}: Props) {
  if (isSSR) {
    return null;
  }

  return (
    <ThemeProvider>
      <FontFaceProvider>{children}</FontFaceProvider>
    </ThemeProvider>
  );
}

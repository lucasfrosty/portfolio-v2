import React from 'react';

import {ThemeProvider} from './ThemeProvider';

interface Props {
  children: React.ReactNode;
}

export function AppProvider({children}: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

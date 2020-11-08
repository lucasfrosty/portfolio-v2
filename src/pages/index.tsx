import React from 'react';

import {AppProvider} from '../foundations';

import AboutMe from './about-me';

export default function IndexPage() {
  return (
    <AppProvider>
      <AboutMe />
    </AppProvider>
  );
}

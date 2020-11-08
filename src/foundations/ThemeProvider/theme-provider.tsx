import React, {useState} from 'react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';

import {ThemeContext, ThemeMode, themes} from '../../utilities/theme';

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({children}: Props) {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('darkMode');

  return (
    <StyledComponentsThemeProvider theme={themes[currentTheme]}>
      <ThemeContext.Provider value={{toggleTheme, currentTheme}}>
        {children}
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );

  function toggleTheme() {
    setCurrentTheme((prevTheme) => {
      if (prevTheme === 'darkMode') {
        return 'whiteMode';
      }

      return 'darkMode';
    });
  }
}

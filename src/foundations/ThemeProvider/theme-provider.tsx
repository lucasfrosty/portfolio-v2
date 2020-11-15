import React from 'react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';

import {ThemeContext, themes, useLocalTheme} from '../../utilities/theme';

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({children}: Props) {
  const [currentTheme, setCurrentTheme] = useLocalTheme();

  return (
    <StyledComponentsThemeProvider theme={themes[currentTheme]}>
      <ThemeContext.Provider value={{toggleTheme, currentTheme}}>
        {children}
      </ThemeContext.Provider>
    </StyledComponentsThemeProvider>
  );

  function toggleTheme() {
    if (currentTheme === 'darkMode') {
      setCurrentTheme('lightMode');
    } else {
      setCurrentTheme('darkMode');
    }
  }
}

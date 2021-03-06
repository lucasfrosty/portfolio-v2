import React, {useEffect, useState} from 'react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';

import {ThemeContext, themes, useLocalTheme} from '../../utilities/theme';

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({children}: Props) {
  const [currentLocalTheme, setCurrentLocalTheme] = useLocalTheme();
  const [theme, setTheme] = useState(currentLocalTheme);

  return (
    <ThemeContext.Provider value={{toggleTheme, currentTheme: theme}}>
      <StyledComponentsThemeProvider theme={themes[theme]}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );

  function toggleTheme() {
    if (theme === 'darkMode') {
      setTheme('lightMode');
      setCurrentLocalTheme('lightMode');
    } else {
      setTheme('darkMode');
      setCurrentLocalTheme('darkMode');
    }
  }
}

import React, {useState} from 'react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';

import {ThemeContext, themes, useLocalTheme} from '../../utilities/theme';
import {isSSR} from '../../utilities/constants';

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({children}: Props) {
  const [currentLocalTheme, setCurrentLocalTheme] = useLocalTheme();
  const [theme, setTheme] = useState(currentLocalTheme);

  if (isSSR) {
    return null;
  }

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

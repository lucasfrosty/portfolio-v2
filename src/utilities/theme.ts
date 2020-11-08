import {createContext, useContext} from 'react';

import {noop} from './other';
import {useLocalStorage} from './local-storage';

export interface ThemeProperties {
  primary: string;
  text: string;
  background: string;
  link: string;
}

export type ThemeMode = 'darkMode' | 'whiteMode';
export const themes: Record<ThemeMode, ThemeProperties> = {
  whiteMode: {
    background: '#fff',
    primary: '#6c66e3',
    text: '#464646',
    link: '#383838',
  },
  darkMode: {
    background: '#18181b',
    primary: 'cyan',
    text: '#fff',
    link: 'red',
  },
};

const LOCAL_STORAGE_KEY = 'lucas_frosty_blog_theme';
export function useLocalTheme() {
  return useLocalStorage<ThemeMode>(LOCAL_STORAGE_KEY, 'whiteMode');
}

interface ContextType {
  currentTheme: ThemeMode;
  toggleTheme(): void;
}

export const ThemeContext = createContext<ContextType>({
  currentTheme: 'whiteMode',
  toggleTheme: noop,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useCurrentThemeProperties() {
  const {currentTheme} = useTheme();

  return themes[currentTheme];
}

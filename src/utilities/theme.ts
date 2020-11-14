import {createContext, useContext} from 'react';

import {noop} from './other';
import {useLocalStorage} from './local-storage';

export interface ThemeProperties {
  primary: string;
  text: string;
  background: string;
  link: string;
  shadow: string;
  border: string;
  highlight: string;
}

export type ThemeMode = 'darkMode' | 'whiteMode';
export const themes: Record<ThemeMode, ThemeProperties> = {
  whiteMode: {
    background: '#fff',
    primary: '#6c66e3',
    text: '#464646',
    link: '#383838',
    shadow: '7px 7px 23px -3px rgba(149, 157, 165, 0.25)',
    border: '#dfe3e8',
    highlight: '#000',
  },
  darkMode: {
    background: '#282c35',
    primary: '#469df0',
    text: 'rgba(255, 255, 255, 0.9)',
    link: 'rgba(255, 255, 255, 0.8)',
    shadow: '7px 7px 23px -3px rgba(59, 63, 69, 0.15)',
    border: '#2e2e2e',
    highlight: '#fff',
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

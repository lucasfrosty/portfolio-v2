import {createContext, useContext} from 'react';
import {useLocalStorage} from './local-storage';
import {noop} from './other';

export interface ThemeProperties {
  primary: string;
  text: string;
  background: string;
  link: string;
  shadow: string;
  border: string;
  highlight: string;
  cardShadow: string;
  subscriptionButtonBorder(): string;
  inverseBorder: string;
}

export type ThemeMode = 'darkMode' | 'lightMode';
export const themes: Record<ThemeMode, ThemeProperties> = {
  lightMode: {
    background: '#fff',
    primary: '#6c66e3',
    text: '#464646',
    link: '#383838',
    shadow: '7px 7px 23px -3px rgba(149, 157, 165, 0.25)',
    border: '#dfe3e8',
    highlight: '#000',
    cardShadow: 'rgba(210, 214, 220, 0.9) 0px 2px 15px 0px',
    subscriptionButtonBorder() {
      return this.primary;
    },
    inverseBorder: 'rgba(255, 255, 255, 0.8)',
  },
  darkMode: {
    background: '#282c35',
    primary: '#70b9ff',
    text: 'rgba(255, 255, 255, 0.9)',
    link: 'rgba(255, 255, 255, 0.8)',
    shadow: '7px 7px 23px -3px rgba(59, 63, 69, 0.15)',
    border: '#454545',
    highlight: '#fff',
    cardShadow: 'rgba(26, 26, 27, 0.635) 0px 2px 15px 0px',
    subscriptionButtonBorder() {
      return this.border;
    },
    inverseBorder: 'rgba(255, 255, 255, 0.9)',
  },
};

const LOCAL_STORAGE_KEY = 'lucas_frosty_blog_theme';
export function useLocalTheme() {
  return useLocalStorage<ThemeMode>(LOCAL_STORAGE_KEY, 'darkMode');
}

interface ContextType {
  currentTheme: ThemeMode;
  toggleTheme(): void;
}

export const ThemeContext = createContext<ContextType>({
  currentTheme: 'lightMode',
  toggleTheme: noop,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useCurrentThemeProperties() {
  const {currentTheme} = useTheme();

  return themes[currentTheme];
}

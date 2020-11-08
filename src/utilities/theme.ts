import baseStyled, {ThemedStyledInterface} from 'styled-components';
import {createContext, useContext} from 'react';

import {noop} from './other';

export interface ThemeProperties {
  primary: string;
  text: string;
  background: string;
  link: string;
}

export const themes: Record<ThemeMode, ThemeProperties> = {
  whiteMode: {
    background: '#fff',
    primary: '#6c66e3',
    text: '#464646',
    link: '#383838',
  },
  darkMode: {
    background: '#000',
    primary: '#6c66e3',
    text: '#fff',
    link: 'red',
  },
};

// custom version of styled, which will have the `props.theme` object strongly typed
export const styled = baseStyled as ThemedStyledInterface<ThemeProperties>;

// here i'm also creating a custom theme provider so i can use the current color schema
// also on the javascript side, for the cases i'm not using styled components, like svgs and circles
export type ThemeMode = 'darkMode' | 'whiteMode';
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

export function useThemeProperties() {
  const {currentTheme} = useTheme();

  return themes[currentTheme];
}

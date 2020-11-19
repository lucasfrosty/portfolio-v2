import {isSSR} from './constants';

export enum Route {
  Index = '/',
  Blog = '/blog/',
  Work = '/work/',
}

export function addFullPathToSubpath(subpath: string) {
  if (isSSR) {
    return '';
  }

  return window.location.origin + subpath;
}

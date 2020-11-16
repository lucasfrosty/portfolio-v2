export enum Route {
  Index = '/',
  Blog = '/blog/',
  Work = '/work/',
}

export function addFullPathToSubpath(subpath: string) {
  return window.location.origin + subpath;
}

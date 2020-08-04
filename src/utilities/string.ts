export function capitalize(str: string) {
  if (str.trim().length === 0) {
    return '';
  }

  const [firstLetter, ...rest] = str;

  return firstLetter.toUpperCase() + rest;
}

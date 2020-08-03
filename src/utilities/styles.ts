export const colors = {
  primary: '#6c66e3',
  text: '#464646',
};

export const breakPointsInPx = {
  aboutMe: 1000,
  layoutCirclesDisappear: {
    width: 1000,
    height: 780,
  },
};

export const globalWrapperMargin: React.CSSProperties = {
  margin: '0 auto',
  padding: 30,
  maxWidth: 1280,
};

function addColorEdges(colorNumber: number): number {
  if (colorNumber > 255) {
    return 255;
  } else if (colorNumber < 0) {
    return 0;
  }

  return colorNumber;
}

export function darken(colorCode: string, amount: number) {
  const [firstColorChar] = colorCode;
  const isHex = firstColorChar === '#';
  const colorCodeWithoutHash = isHex ? colorCode.slice(1) : colorCode;

  const colorCodeInt = parseInt(colorCodeWithoutHash, 16);

  const redValue = colorCodeInt >> 16;
  const blueValue = (colorCodeInt >> 8) & 0x00ff;
  const greenValue = colorCodeInt & 0x0000ff;

  const [red, green, blue] = [redValue, greenValue, blueValue].map((value) =>
    addColorEdges(value - amount),
  );

  return (isHex ? '#' : '') + (green | (blue << 8) | (red << 16)).toString(16);
}

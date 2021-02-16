import React, {useEffect, useState} from 'react';
import FontFaceObserver from 'fontfaceobserver';

const provider = new FontFaceObserver('Baloo 2');

interface Props {
  children?: React.ReactNode;
}

export function FontFaceProvider({children}: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    provider.load().then(() => {
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return null;
  }

  return children as React.ReactElement;
}

import React, {useState, cloneElement} from 'react';
import {usePopper} from 'react-popper';

interface Props {
  activator: React.ReactElement;
  children: React.ReactElement;
  active: boolean;
  options?: Parameters<typeof usePopper>['2'];
}

export function Popover({activator, active, children, options}: Props) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const {styles, attributes} = usePopper(
    referenceElement,
    popperElement,
    options,
  );

  const clonedActivator = cloneElement(activator, {
    ref: setReferenceElement,
  });

  const clonedChildren = cloneElement(children, {
    ref: setPopperElement,
    style: styles.popper,
    ...attributes.popper,
  });

  return (
    <>
      {clonedActivator}
      {active && clonedChildren}
    </>
  );
}

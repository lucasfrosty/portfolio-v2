import React, {useState, useEffect, useCallback, cloneElement} from 'react';
import {usePopper} from 'react-popper';

interface Props {
  activator: React.ReactElement;
  children: React.ReactElement;
  active: boolean;
  options?: Parameters<typeof usePopper>['2'];
  onClose(): void;
}

enum Id {
  Children = 'POPOVER_CHILDREN_ID',
  Activator = 'POPOVER_ACTIVATOR_ID',
}

export function Popover({
  activator,
  active,
  children,
  options,
  onClose,
}: Props) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const {styles, attributes} = usePopper(
    referenceElement,
    popperElement,
    options,
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      /* need to cast as any because MouseEvent type in typescript does not have
       the path property (but the object do) */
      const isClickOnChildrenOrActivator = (event as any).path.some(
        (node: HTMLElement) =>
          node.id === Id.Children || node.id === Id.Activator,
      );

      if (!isClickOnChildrenOrActivator) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);

    return () => window.removeEventListener('mousedown', onMouseDown);
  });

  const clonedActivator = cloneElement(activator, {
    id: Id.Activator,
    ref: setReferenceElement,
  });

  const clonedChildren = cloneElement(children, {
    id: Id.Children,
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

import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  centered?: boolean;
}

const CardWrapper = styled.div<{centered: boolean}>`
  box-shadow: ${(props) => props.theme.cardShadow};
  padding: 20px;

  border-radius: 12px;

  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.centered ? 'center' : 'start')};
`;

export function Card({children, centered = false}: Props) {
  return <CardWrapper centered={centered}>{children}</CardWrapper>;
}

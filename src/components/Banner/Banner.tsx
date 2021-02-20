import React from 'react';
import styled from 'styled-components';

import {Cancel, DisabledCircle, Info} from '../../icons';

import {UnstyledButton} from '../UnstyledButton';

const ErrorBannerWrapper = styled.div<{type: Props['type']}>`
  padding: 12px;
  background-color: ${(props) =>
    props.type === 'info' ? '#E3F1DF' : '#fbeae5'};
  color: #212b36;

  border-top: 3px solid
    ${(props) => (props.type === 'info' ? '#50b83c' : '#de3618')};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;

  display: flex;
  align-items: center;

  path {
    fill: ${(props) => (props.type === 'info' ? '#50b83c' : '#de3618')};
  }
`;

const CloseButtonWrapper = styled(UnstyledButton)`
  height: 20px;

  path {
    fill: #212b36;
  }
`;

interface Props {
  children: React.ReactNode;
  onClose(): void;
  type: 'error' | 'info';
}

export function Banner({children, onClose, type}: Props) {
  const Icon = type === 'info' ? Info : DisabledCircle;

  return (
    <ErrorBannerWrapper type={type}>
      <Icon width="20" height="20" />
      <div style={{flex: 1, paddingLeft: 6}}>
        <p style={{margin: 0}}>{children}</p>
      </div>
      <CloseButtonWrapper style={{height: 20}} onClick={onClose}>
        <Cancel width="20" height="20" />
      </CloseButtonWrapper>
    </ErrorBannerWrapper>
  );
}

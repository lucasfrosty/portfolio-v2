import React from 'react';
import styled from 'styled-components';

import {Cancel, DisabledCircle} from '../icons';

import {UnstyledButton} from './unstyled-button';

const ErrorBannerWrapper = styled.div`
  padding: 12px;
  background-color: #fbeae5;
  color: #212b36;

  border: 3px solid #de3618;
  border-radius: 12px;

  display: flex;
  align-items: center;

  path {
    fill: #de3618;
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
}

export function ErrorBanner({children, onClose}: Props) {
  return (
    <ErrorBannerWrapper>
      <DisabledCircle width="20" height="20" />
      <div style={{flex: 1, paddingLeft: 6}}>
        <p style={{margin: 0}}>{children}</p>
      </div>
      <CloseButtonWrapper style={{height: 20}} onClick={onClose}>
        <Cancel width="20" height="20" />
      </CloseButtonWrapper>
    </ErrorBannerWrapper>
  );
}

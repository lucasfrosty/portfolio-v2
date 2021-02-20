import styled from 'styled-components';

export const UnstyledButton = styled.button.attrs((props) => ({
  'aria-label': props['aria-label'],
}))`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  &:active {
    outline: none;
  }

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;
  max-height: 32px;
  z-index: 10;
`;

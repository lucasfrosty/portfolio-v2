import styled from 'styled-components';

export const SecondHeader = styled.h2<{margin?: string}>`
  font-weight: 600;
  color: ${(props) => props.theme.primary};
  ${(props) => props.margin != null && `margin: ${props.margin}px;`}
`;

import styled from 'styled-components';

interface Props {
  margin: string;
  atBreakpoint?: number;
}

export const SpacedWrapper = styled.div<Props>`
  margin: ${(props) => (props.atBreakpoint ? 0 : props.margin || 0)};

  @media only screen and (max-width: ${(props) => props.atBreakpoint}px) {
    margin: ${(props) => props.margin};
  }
`;

import styled from 'styled-components';

interface Props {
  caption?: boolean;
}

export const Text = styled.p<Props>`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => (props.caption ? 15 : 18)}px;
  margin: 0;
`;

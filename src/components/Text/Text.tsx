import styled from 'styled-components';

interface Props {
  caption?: boolean;
  highlight?: boolean;
  color?: string;
}

export const Text = styled.p<Props>`
  color: ${(props) =>
    props.color ?? props.highlight ? props.theme.highlight : props.theme.text};
  font-size: ${(props) => (props.caption ? 15 : 18)}px;
  margin: 0;
`;

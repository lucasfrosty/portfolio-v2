import styled from 'styled-components';

import {colors} from '../utilities/styles';

interface Props {
  caption?: boolean;
}

export const Text = styled.p<Props>`
  color: ${colors.text};
  font-size: ${(props) => (props.caption ? 15 : 18)}px;
  margin: 0;
`;

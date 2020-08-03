import styled from 'styled-components';

export const Text = styled.p<{caption?: boolean}>`
  color: #464646;
  font-size: ${(props) => (props.caption ? 15 : 18)}px;
  margin: 0;
`;

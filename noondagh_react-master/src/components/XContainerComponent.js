import React from 'react';
import styled from 'styled-components';
import {colors} from '../styles/publicStyles';

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.bgColor || colors.baseBgColor};
`;

const XContainerComponent = (props) => (
  <Container {...props}>{props.children}</Container>
);

export default XContainerComponent;

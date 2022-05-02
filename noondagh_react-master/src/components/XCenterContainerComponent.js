import React from 'react';
import styled from 'styled-components';
import {colors} from '../styles/publicStyles';

const CenterContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || colors.baseBgColor};
`;

const XCenterContainerComponent = (props) => (
  <CenterContainer {...props}>{props.children}</CenterContainer>
);

export default XCenterContainerComponent;

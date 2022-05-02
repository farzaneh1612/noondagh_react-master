import React from 'react';
import styled from 'styled-components';
import {colors} from '../styles/publicStyles';

const SafeContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.bgColor || colors.statusBarColor};
`;

const XSafeContainerComponent = (props) => (
  <SafeContainer {...props}>{props.children}</SafeContainer>
);

export default XSafeContainerComponent;

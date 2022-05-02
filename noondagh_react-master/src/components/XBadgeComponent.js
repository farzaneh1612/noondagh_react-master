import React from 'react';
import styled from 'styled-components';
import {shadowGen, responsiveSize} from '../functions/styleFuncs';
import XTextComponent from './XTextComponent';
import {colors} from '../styles/publicStyles';

const Circle = styled.View`
  width: ${(props) =>
    responsiveSize(props.radius || 25, true, props.responsiveFactor)};
  height: ${(props) =>
    responsiveSize(props.radius || 25, true, props.responsiveFactor)};
  border-radius: ${(props) =>
    responsiveSize(props.radius || 25, true, props.responsiveFactor)};
  background-color: ${(props) => props.bgColor || colors.badgeColor};
  align-items: center;
  justify-content: center;
  align-self: ${(props) =>
    props.leftAlign ? 'flex-start' : props.rightAlign ? 'flex-end' : 'center'};
  margin-left: ${(props) =>
    responsiveSize(props.leftAlign || 0, true, props.responsiveFactor)};
  margin-right: ${(props) =>
    responsiveSize(props.rightAlign || 0, true, props.responsiveFactor)};
`;

export default function XBadgeComponent(props) {
  return (
    <Circle
      {...props}
      style={{...shadowGen(props.shadow || 0), ...props.style}}>
      {props.label && (
        <XTextComponent color="#fff" {...props.label}>
          {props.leftInnerLabel && (
            <XTextComponent color="#fff" {...props.leftInnerLabel}>
              {props.leftInnerLabel.text}
            </XTextComponent>
          )}
          {props.label.text}
          {props.rightInnerLabel && (
            <XTextComponent color="#fff" {...props.rightInnerLabel}>
              {props.rightInnerLabel.text}
            </XTextComponent>
          )}
        </XTextComponent>
      )}
    </Circle>
  );
}

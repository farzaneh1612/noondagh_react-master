import React, {useState} from 'react';
import styled from 'styled-components';
import {shadowGen, pxSizeGen, responsiveSize} from '../functions/styleFuncs';
import {DEVICE_WIDTH} from '../constants/constants';
import XIconComponent from './XIconComponent';

const OuterImageWrapper = styled.View`
  width: ${(props) =>
    responsiveSize(props.width, true, props.responsiveFactor)};
  height: ${(props) =>
    responsiveSize(props.height, true, props.responsiveFactor)};
  border-radius: ${(props) =>
    responsiveSize(props.radius, true, props.responsiveFactor)};
  border-width: ${(props) =>
    props.bordered ? pxSizeGen(props.bordered.width) || '1px' : '0px'};
  border-color: ${(props) =>
    props.bordered ? props.bordered.color : '#00000000'};
  align-self: ${(props) =>
    props.leftAlign ? 'flex-start' : props.rightAlign ? 'flex-end' : 'center'};
  margin-left: ${(props) =>
    (props.leftAlign &&
      responsiveSize(props.leftAlign, true, props.responsiveFactor)) ||
    '0px'};
  margin-right: ${(props) =>
    (props.rightAlign &&
      responsiveSize(props.rightAlign, true, props.responsiveFactor)) ||
    '0px'};
  background-color: #00000000;
`;
const InnerImageWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: ${(props) =>
    responsiveSize(props.radius, true, props.responsiveFactor)};
  background-color: ${(props) => props.placeholderBgColor || '#00000000'};
`;
const Img = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export default function XImageComponent(props) {
  const {
    leftAlign,
    rightAlign,
    width,
    height,
    shadow,
    bordered,
    style,
    rect,
    heightScale,
    circle,
    radius,
    notRadius,
    large,
    small,
    responsiveFactor,
    onPress,
    activeOpacity,
    placeholderColor,
    notPlaceholder,
    block,
    flip,
  } = props;

  const [blur, setBlur] = useState(1);

  const blockWidth = DEVICE_WIDTH;
  const largeWidth = DEVICE_WIDTH * 0.8;
  const smallWidth = 50;

  const thisWidth =
    width ||
    (block && blockWidth) ||
    (circle && radius) ||
    (large && largeWidth) ||
    (small && smallWidth) ||
    200;

  const thisHeight =
    height ||
    (circle && radius) ||
    (rect && Math.floor(thisWidth * heightScale)) ||
    thisWidth;

  const thisRadius = notRadius ? 0 : radius || 5;

  const wrapperStyle = {
    ...shadowGen(shadow || 0),
    transform: [{scaleX: flip ? -1 : 1}],
  };

  return (
    <OuterImageWrapper
      width={thisWidth}
      height={thisHeight}
      bordered={bordered}
      leftAlign={leftAlign}
      rightAlign={rightAlign}
      radius={thisRadius}
      responsiveFactor={responsiveFactor}
      style={{...wrapperStyle, ...style}}>
      <InnerImageWrapper
        radius={thisRadius}
        responsiveFactor={responsiveFactor}
        onPress={onPress}
        activeOpacity={activeOpacity || 0.9}>
        {!notPlaceholder && (
          <XIconComponent
            type="awesome"
            name="image"
            color={placeholderColor || '#bbb'}
            size={responsiveSize(thisWidth / 4, false, responsiveFactor)}
          />
        )}
        <Img
          blurRadius={blur}
          resizeMode="stretch"
          onLoadEnd={() => {
            setTimeout(() => setBlur(0), 100);
          }}
          {...props}
          style={null}
        />
      </InnerImageWrapper>
    </OuterImageWrapper>
  );
}

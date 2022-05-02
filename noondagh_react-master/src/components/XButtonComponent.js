import React from 'react';
import {Image, Platform, TouchableNativeFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {shadowGen, pxSizeGen, responsiveSize} from '../functions/styleFuncs';
import XIconComponent from '../components/XIconComponent';
import XTextComponent from '../components/XTextComponent';

const OuterButtonWrapper = styled.TouchableOpacity`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  align-self: ${(props) =>
    props.leftAlign ? 'flex-start' : props.rightAlign ? 'flex-end' : 'center'};
  border-width: ${(props) =>
    props.border ? pxSizeGen(props.border.width) || '1px' : 0};
  border-color: ${(props) =>
    props.border
      ? props.border.color
      : props.label
      ? props.label.color || '#555'
      : '#555'};
  margin-left: ${(props) =>
    responsiveSize(props.leftAlign || 0, true, props.responsiveFactor)};
  margin-right: ${(props) =>
    responsiveSize(props.rightAlign || 0, true, props.responsiveFactor)};
  margin-top: ${(props) =>
    props.notMargin ? '0px' : responsiveSize(15, true, props.responsiveFactor)};
  margin-bottom: ${(props) =>
    props.notMargin ? '0px' : responsiveSize(15, true, props.responsiveFactor)};
`;
const InnerButtonWrapper = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  border: 0 solid transparent;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) =>
    props.style
      ? props.style.backgroundColor
      : !props.transparent
      ? props.bgColor || '#fefefe'
      : 'transparent'};
`;
const ButtonContentWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: ${(props) =>
    props.iconBottom || props.iconTop ? 'column' : 'row'};
  justify-content: ${(props) =>
    props.leftAlignContent
      ? 'flex-start'
      : props.rightAlignContent
      ? 'flex-end'
      : 'center'};
  padding-left: ${(props) =>
    props.leftAlignContent
      ? responsiveSize(props.leftAlignContent, true, props.responsiveFactor)
      : '0'};
  padding-right: ${(props) =>
    props.rightAlignContent
      ? responsiveSize(props.rightAlignContent, true, props.responsiveFactor)
      : '0'};
  border: 0 solid transparent;
`;
export default function XButtonComponent(props) {
  const {
    btnType,
    style,
    underlayColor,
    label,
    elRef,
    circle,
    radius,
    height,
    width,
    block,
    rounded,
    notRadius,
    onPress,
    onPressIn,
    onPressOut,
    disabled,
    disabledOnPress,
    activeOpacity,
    transparent,
    shadow,
    gradient,
    iconLeft,
    iconRight,
    iconBottom,
    iconTop,
    responsiveFactor,
  } = props;

  const firstIcon = iconLeft || iconTop;
  const secondIcon = iconRight || iconBottom;

  const thisRadius = radius || 5;

  const buttonHeight = circle
    ? responsiveSize(thisRadius, true, responsiveFactor)
    : height
    ? responsiveSize(height, true, responsiveFactor)
    : iconBottom || iconLeft
    ? responsiveSize(60, true, responsiveFactor)
    : responsiveSize(45, true, responsiveFactor);

  const buttonWidth = circle
    ? responsiveSize(thisRadius, true, responsiveFactor)
    : width
    ? responsiveSize(width, true, responsiveFactor)
    : block
    ? '100%'
    : iconTop || iconBottom
    ? responsiveSize(90, true, responsiveFactor)
    : responsiveSize(125, true, responsiveFactor);

  const buttonRadius = circle
    ? responsiveSize(thisRadius, true, responsiveFactor)
    : rounded
    ? buttonHeight
    : notRadius
    ? 0
    : responsiveSize(thisRadius, true, responsiveFactor);

  const overFlow = Platform.OS !== 'ios' && {overflow: 'hidden'};

  const ButtonContent = () => {
    const BtnWrapper = ({children}) =>
      Platform.OS === 'ios' || btnType === 'ios' ? (
        <>{children}</>
      ) : (
        <TouchableNativeFeedback
          onPress={disabled ? disabledOnPress : onPress}
          onPressIn={disabled ? disabledOnPress : onPressIn}
          onPressOut={disabled ? disabledOnPress : onPressOut}
          background={
            Platform.Version > 21
              ? TouchableNativeFeedback.Ripple(underlayColor || '#eee', true)
              : null
          }
          delayPressIn={0}
          delayPressOut={0}>
          {children}
        </TouchableNativeFeedback>
      );

    const firstIconStyle = {
      marginBottom:
        label && iconTop
          ? responsiveSize(label.topSpace || 5, false, responsiveFactor)
          : 0,
      marginRight:
        label && iconLeft
          ? responsiveSize(label.leftSpace || 5, false, responsiveFactor)
          : 0,
    };

    const secondIconStyle = {
      marginTop:
        label && iconBottom
          ? responsiveSize(label.bottomSpace || 5, false, responsiveFactor)
          : 0,
      marginRight:
        label && iconRight
          ? responsiveSize(label.rightSpace || 5, false, responsiveFactor)
          : 0,
    };

    return (
      <BtnWrapper>
        <ButtonContentWrapper {...props} style={null}>
          {firstIcon ? (
            firstIcon.source ? (
              <Image
                source={firstIcon.source}
                style={{
                  width:
                    responsiveSize(firstIcon.size, false, responsiveFactor) ||
                    responsiveSize(18, false),
                  height:
                    responsiveSize(firstIcon.size, false, responsiveFactor) ||
                    responsiveSize(18, false, responsiveFactor),
                  tintColor: firstIcon.color,
                  ...firstIconStyle,
                  ...firstIcon.style,
                }}
              />
            ) : (
              <XIconComponent
                type={firstIcon.type}
                name={firstIcon.name}
                size={
                  responsiveSize(firstIcon.size, false, responsiveFactor) ||
                  responsiveSize(18, false, responsiveFactor)
                }
                color={firstIcon.color || '#555'}
                flip={firstIcon.flip || false}
                style={{
                  ...firstIconStyle,
                  ...firstIcon.style,
                }}
              />
            )
          ) : null}

          {label ? (
            <XTextComponent {...label}>{label.text}</XTextComponent>
          ) : null}

          {secondIcon ? (
            secondIcon.source ? (
              <Image
                source={secondIcon.source}
                style={{
                  width:
                    responsiveSize(secondIcon.size, false, responsiveFactor) ||
                    responsiveSize(18, false, responsiveFactor),
                  height:
                    responsiveSize(secondIcon.size, false, responsiveFactor) ||
                    responsiveSize(18, false, responsiveFactor),
                  tintColor: secondIcon.color,
                  ...secondIconStyle,
                  ...secondIcon.style,
                }}
              />
            ) : (
              <XIconComponent
                type={secondIcon.type}
                name={secondIcon.name}
                size={
                  responsiveSize(secondIcon.size, false, responsiveFactor) ||
                  responsiveSize(18, false, responsiveFactor)
                }
                color={secondIcon.color || '#555'}
                flip={secondIcon.flip || false}
                style={{
                  ...secondIconStyle,
                  ...secondIcon.style,
                }}
              />
            )
          ) : null}
        </ButtonContentWrapper>
      </BtnWrapper>
    );
  };

  return (
    <OuterButtonWrapper
      {...props}
      width={buttonWidth}
      height={buttonHeight}
      radius={buttonRadius}
      onPress={disabled ? disabledOnPress : onPress}
      onPressIn={disabled ? disabledOnPress : onPressIn}
      onPressOut={disabled ? disabledOnPress : onPressOut}
      activeOpacity={
        Platform.OS !== 'ios' || btnType !== 'ios' || !disabled
          ? activeOpacity || 0.8
          : 1
      }
      style={{
        ...shadowGen(transparent ? 0 : shadow || 0),
        ...style,
        ...overFlow,
      }}
      ref={elRef}>
      <InnerButtonWrapper
        {...props}
        radius={buttonRadius}
        colors={(gradient && gradient.colors) || ['transparent', 'transparent']}
        locations={(gradient && gradient.locations) || null}
        start={(gradient && gradient.start) || {x: 0, y: 0}}
        end={(gradient && gradient.end) || {x: 1, y: 0}}
        style={null}>
        <ButtonContent {...props} style={null} />
      </InnerButtonWrapper>
    </OuterButtonWrapper>
  );
}

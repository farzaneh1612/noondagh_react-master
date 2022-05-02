import React, {Component} from 'react';
import {View, Platform, TextInput} from 'react-native';
import styled from 'styled-components';
import {
  shadowGen,
  pxSizeGen,
  responsiveSize,
  specificSize,
} from '../functions/styleFuncs';
import {priceFormatter} from '../functions/pubFuncs';
import {
  thinFont,
  lightFont,
  regFont,
  mediumFont,
  boldFont,
  extraBoldFont,
  blackFont,
  extraBlackFont,
  DEVICE_WIDTH,
} from '../constants/constants';
import XButtonComponent from './XButtonComponent';
import XTextComponent from './XTextComponent';

const InputAndErrWrapper = styled.View`
  align-self: ${(props) =>
    props.leftAlign ? 'flex-start' : props.rightAlign ? 'flex-end' : 'center'};
  margin-left: ${(props) =>
    responsiveSize(props.leftAlign || 0, true, props.responsiveFactor)};
  margin-right: ${(props) =>
    responsiveSize(props.rightAlign || 0, true, props.responsiveFactor)};
  margin-bottom: ${(props) =>
    props.notMargin ? '0px' : responsiveSize(10, true, props.responsiveFactor)};
`;
const OuterInputWrapper = styled.View`
  width: 100%;
  border-radius: ${(props) =>
    responsiveSize(
      (props.textInputStyle && props.textInputStyle.borderRadius) ||
        props.radius ||
        5,
      true,
      props.responsiveFactor,
    )};
  border-width: ${(props) =>
    (props.textInputStyle && pxSizeGen(props.textInputStyle.borderWidth)) ||
    (props.bordered && pxSizeGen(props.bordered.width || 1)) ||
    '0px'};
  border-color: ${(props) =>
    (props.errText && props.errText.text && '#f44') ||
    (props.textInputStyle && props.textInputStyle.borderColor) ||
    (props.bordered && props.bordered.color) ||
    '#eee'};
  background-color: ${(props) =>
    props.bgColor ||
    (props.textInputStyle && props.textInputStyle.backgroundColor) ||
    '#fefefe'};
`;
const InnerInputWrapper = styled.View`
  width: 100%;
  border-radius: ${(props) =>
    responsiveSize(
      (props.textInputStyle && props.textInputStyle.borderRadius) ||
        props.radius ||
        5,
      true,
      props.responsiveFactor,
    )};
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;
const fontFactorResponsive = 0.2;

export default class XTextInputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    const {
      errText,
      disableErrText,
      iconLeft,
      iconRight,
      iconLeftPress,
      iconRightPress,
      height,
      textAlign,
      font,
      extraBlack,
      black,
      extraBold,
      bold,
      medium,
      light,
      thin,
      onBlur,
      blurOnSubmit,
      onChangeText,
      wrapperStyle,
      textInputStyle,
      errTextWrapperStyle,
      priceFormat,
      rounded,
      radius,
      placeholderTextColor,
      size,
      h1,
      h2,
      h3,
      small,
      smaller,
      color,
      dark,
      muted,
      responsiveFactor,
      shadow,
      inputRef,
      width,
      value,
      block,
      secureTextEntry,
      numberOfLine,
      textArea,
    } = this.props;

    const {text} = this.state;

    const textFont =
      font || extraBlack
        ? extraBlackFont
        : black
        ? blackFont
        : extraBold
        ? extraBoldFont
        : bold
        ? boldFont
        : medium
        ? mediumFont
        : light
        ? lightFont
        : thin
        ? thinFont
        : regFont;

    const textSize = size
      ? responsiveSize(size, false, fontFactorResponsive)
      : h1
      ? responsiveSize(20, false, fontFactorResponsive)
      : h2
      ? responsiveSize(18, false, fontFactorResponsive)
      : h3
      ? responsiveSize(16, false, fontFactorResponsive)
      : small
      ? responsiveSize(12, false, fontFactorResponsive)
      : smaller
      ? responsiveSize(10, false, fontFactorResponsive)
      : responsiveSize(14, false, fontFactorResponsive);

    const textColor = color ? color : dark ? '#111' : muted ? '#999' : '#555';

    const textInputHeight =
      height || responsiveSize(textArea ? 150 : 43, false, responsiveFactor);

    const styles = {
      inputStyle: {
        flex: 1,
        height: textInputHeight,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: textArea ? 10 : 0,
        paddingBottom: 0,
        fontFamily: textFont,
        textAlign: textAlign || 'right',
        fontSize: textSize,
        color: textColor,
        textAlignVertical: textArea ? 'top' : 'center',

        paddingHorizontal: responsiveSize(
          rounded ? 15 : 7,
          false,
          responsiveFactor,
        ),
      },
      innerInputWrapper: {
        borderWidth: 0,
        backgroundColor: 'transparent',
      },
      errTextWrapper: {
        height: responsiveSize(20, false, responsiveFactor),
        paddingHorizontal: responsiveSize(10, false, responsiveFactor),
        justifyContent: 'center',
      },
    };

    return (
      <InputAndErrWrapper
        {...this.props}
        style={{
          width:
            (block && '100%') ||
            width ||
            specificSize(
              DEVICE_WIDTH * 0.85,
              DEVICE_WIDTH * 0.7,
              DEVICE_WIDTH * 0.4,
            ),
          ...wrapperStyle,
        }}>
        <OuterInputWrapper
          {...this.props}
          radius={rounded ? textInputHeight : radius}
          style={{...shadowGen(shadow || 0)}}>
          <InnerInputWrapper
            {...this.props}
            radius={rounded ? textInputHeight : radius}
            style={{
              ...textInputStyle,
              ...styles.innerInputWrapper,
            }}>
            {iconLeft && (
              <XButtonComponent
                iconLeft={iconLeft}
                radius={iconLeft.radius || 0}
                onPress={iconLeftPress}
                shadow={0}
                bgColor={iconLeft.bgColor || 'transparent'}
                btnType="ios"
                width={textInputHeight}
                height={iconLeft.size || textInputHeight}
                activeOpacity={1}
                notMargin
              />
            )}

            <TextInput
              {...this.props}
              secureTextEntry={secureTextEntry || false}
              ref={(el) => {
                this.input = el;
                inputRef && inputRef(el);
              }}
              placeholderTextColor={placeholderTextColor || '#bbb'}
              onChangeText={(input) => {
                const cleanText = input.replace(/,/g, '');
                const formattedText = priceFormatter(cleanText);
                this.setState({text: !priceFormat ? cleanText : formattedText});

                onChangeText && onChangeText(cleanText);
              }}
              value={priceFormat ? text : value || null}
              onBlur={() => {
                if (text.trim().length === 0) {
                  this.setState({text: ''});
                }
                onBlur && onBlur();
              }}
              blurOnSubmit={blurOnSubmit || true}
              style={{...styles.inputStyle}}
              multiline={
                (!textArea && secureTextEntry) || Platform.OS === 'ios'
                  ? false
                  : true
              }
              numberOfLines={!textArea ? 1 : numberOfLine || 4}
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />

            {iconRight && (
              <XButtonComponent
                iconRight={iconRight}
                radius={iconRight.radius || 0}
                onPress={iconRightPress}
                shadow={0}
                bgColor={iconRight.bgColor || 'transparent'}
                btnType="ios"
                width={textInputHeight}
                height={iconRight.size || textInputHeight}
                activeOpacity={1}
                notMargin
              />
            )}
          </InnerInputWrapper>
        </OuterInputWrapper>
        {!disableErrText && (
          <View style={{...styles.errTextWrapper, ...errTextWrapperStyle}}>
            {errText && (
              <XTextComponent
                numberOfLines={1}
                smaller
                color="#f44"
                {...errText}>
                {errText.text}
              </XTextComponent>
            )}
          </View>
        )}
      </InputAndErrWrapper>
    );
  }
}

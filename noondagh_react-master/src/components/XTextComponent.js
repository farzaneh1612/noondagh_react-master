import React from 'react';
import {Text} from 'react-native';
import {responsiveSize} from '../functions/styleFuncs';
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
} from '../constants/constants';

export default function XTextComponent(props) {
  const {
    lang,
    children,
    h1,
    h2,
    h3,
    small,
    smaller,
    size,
    priceFormat,
    font,
    extraBlack,
    black,
    extraBold,
    bold,
    medium,
    light,
    thin,
    color,
    dark,
    darker,
    gray,
    muted,
    lineHeight,
    priceDecorator,
    style,
    textAlign,
  } = props;

  const defaultFactor = 0.38;

  const textSize = size
    ? responsiveSize(size, false, defaultFactor)
    : h1
    ? responsiveSize(20, false, defaultFactor)
    : h2
    ? responsiveSize(18, false, defaultFactor)
    : h3
    ? responsiveSize(16, false, defaultFactor)
    : small
    ? responsiveSize(12, false, defaultFactor)
    : smaller
    ? responsiveSize(10, false, defaultFactor)
    : responsiveSize(14, false, defaultFactor);

  const textFont =
    lang && lang === 'en'
      ? 'system font'
      : font || extraBlack
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

  const textColor = color
    ? color
    : darker
    ? '#222'
    : dark
    ? '#353535'
    : gray
    ? '#777'
    : muted
    ? '#9a9a9a'
    : '#555';

  const textLineHeight = lineHeight
    ? responsiveSize(lineHeight, false, defaultFactor)
    : responsiveSize(28, false, defaultFactor);

  const textDecorator = priceDecorator
    ? {
        textDecorationLine: 'line-through',
        textDecorationColor: priceDecorator.color || '#444',
        textDecorationStyle: priceDecorator.style || 'solid',
      }
    : null;

  const textStyle = {
    fontFamily: textFont,
    fontWeight:
      lang && lang === 'en'
        ? bold
          ? 'bold'
          : medium
          ? '800'
          : light
          ? '400'
          : thin
          ? '200'
          : 'normal'
        : 'normal',
    fontSize: textSize,
    color: textColor,
    lineHeight: textLineHeight,
    textAlign: textAlign || 'right',
    ...textDecorator,
    paddingBottom: 0,
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 0,
  };

  return (
    <Text {...props} allowFontScaling={false} style={{...textStyle, ...style}}>
      {priceFormat || priceDecorator ? priceFormatter(children) : children}
    </Text>
  );
}

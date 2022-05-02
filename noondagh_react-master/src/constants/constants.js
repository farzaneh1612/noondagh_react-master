import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('screen').width;
const DEVICE_HEIGHT = Dimensions.get('screen').height;
export const BASE_WIDTH = DEVICE_WIDTH * 0.94;
const baseWidth = DEVICE_WIDTH * 0.93;
const baseSidesSpace = DEVICE_WIDTH * 0.035;
const mediumRadius = setSize(7);
const largeRadius = setSize(20);
const extraLargeRadius = setSize(35);
const smallShadow = setSize(3);
const mediumShadow = setSize(5);

const thinFont = 'IRANYekanWebFn-Thin';
const lightFont = 'IRANYekanWebFn-Light';
const regFont = 'IRANYekanWebFn';
const mediumFont = 'IRANYekanWebFn-Medium';
const boldFont = 'IRANYekanWebFn-Bold';
const extraBoldFont = 'IRANYekanWebFn-ExtraBold';
const blackFont = 'IRANYekanWebFn-Black';
const extraBlackFont = 'IRANYekanWebFn-ExtraBlack';

export {
  mediumShadow,
  smallShadow,
  mediumRadius,
  largeRadius,
  extraLargeRadius,
  baseWidth,
  baseSidesSpace,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  thinFont,
  lightFont,
  regFont,
  mediumFont,
  boldFont,
  extraBoldFont,
  blackFont,
  extraBlackFont,
};

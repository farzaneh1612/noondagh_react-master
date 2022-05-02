import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEVICE_HEIGHT} from '../constants/constants';

// style-related functions --------------------------------------------------------------------
const shadowGen = (number, color = '#000') => ({
  elevation: number,
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: (number === 1 && 1) || Math.floor(number / 2),
  },
  shadowOpacity: number * 2 * 0.01 + 0.16,
  shadowRadius: number / 1.52,
});

const pxSizeGen = (input) => {
  if (typeof input === 'number') {
    return `${input}px`;
  } else if (typeof input === 'boolean') {
    return null;
  } else {
    return input;
  }
};

const responsiveSize = (size, usePxSize = true, factor = 0.5) => {
  const roundedSize = Math.floor(moderateScale(size, factor));
  if (usePxSize) {
    return pxSizeGen(roundedSize);
  } else {
    return roundedSize;
  }
};

const priceFormatter = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getData = async (getValue) => {
  try {
    const value = await AsyncStorage.getItem(getValue);
    return value;
  } catch (e) {
    // error reading value
  }
};
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};
const setSize = (
  sm,
  md = sm + (sm * 18) / 100,
  lg = sm + (sm * 35) / 100,
  maxSm = 500,
  maxMd = 767,
) => {
  if (DEVICE_HEIGHT > maxMd) {
    return lg;
  } else if (DEVICE_WIDTH > maxSm && DEVICE_WIDTH <= maxMd) {
    return md;
  } else {
    return sm;
  }
};

const setShadow = (number, color = '#000') => ({
  shadowColor: color,
  shadowOffset: {
    width: 0,
    height: (number === 1 && 1) || Math.floor(number / 2),
  },
  shadowOpacity: number * 2 * 0.01 + 0.16,
  shadowRadius: number / 1.52,
  elevation: number,
});

export {
  setSize,
  setShadow,
  pxSizeGen,
  responsiveSize,
  priceFormatter,
  shadowGen,
  getData,
  storeData,
};

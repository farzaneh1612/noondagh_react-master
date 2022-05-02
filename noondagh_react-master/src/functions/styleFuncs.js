import {moderateScale} from 'react-native-size-matters';
import {DEVICE_WIDTH} from '../constants/constants';

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

const responsiveSize = (size, usePxSize = true, factor = 0.16) => {
  const roundedSize = Math.floor(moderateScale(size, factor));
  if (usePxSize) {
    return pxSizeGen(roundedSize);
  } else {
    return roundedSize;
  }
};

const specificSize = (sm, md, lg, maxSm = 500, maxMd = 767) => {
  if (DEVICE_WIDTH > maxMd) {
    return lg;
  } else if (DEVICE_WIDTH > maxSm && DEVICE_WIDTH <= maxMd) {
    return md;
  } else {
    return sm;
  }
};

export {pxSizeGen, responsiveSize, shadowGen, specificSize};

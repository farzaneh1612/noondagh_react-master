import React from 'react';
import {BubblesLoader} from 'react-native-indicator';
import {responsiveSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';
import XCenterContainerComponent from './XCenterContainerComponent';
import XIconComponent from './XIconComponent';
import XTextComponent from './XTextComponent';

export default function XEmptyScreenComponent(props) {
  const {loading, msg, err, icon} = props;

  const separator = {marginTop: responsiveSize(30, false)};

  return (
    <XCenterContainerComponent>
      {loading && (
        <BubblesLoader {...loading} color={colors.boxTitleColor} />
        // <View></View>
      )}
      {err && (
        <>
          <XIconComponent
            type={'ion'}
            name={'cloud-offline-outline'}
            size={70}
            color={colors.baseIconColor}
            {...icon}
          />
          <XTextComponent style={{...separator}} textAlign="center">
            {err.text || 'ارتباط با سرور برقرار نیست. لطفا مجددا تلاش نمایید'}
          </XTextComponent>
        </>
      )}
      {msg && (
        <>
          <XIconComponent
            type={'simple-line'}
            name={'magnifier-remove'}
            size={30}
            color={colors.baseIconColor}
            {...icon}
          />
          <XTextComponent style={{...separator}} textAlign="center">
            {msg.text || 'موردی یافت نشد'}
          </XTextComponent>
        </>
      )}
    </XCenterContainerComponent>
  );
}

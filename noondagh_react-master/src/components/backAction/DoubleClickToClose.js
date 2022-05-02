import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Platform, BackHandler, View} from 'react-native';
import {RNToasty} from 'react-native-toasty';

export default function DoubleClickToClose() {
  // declare props

  // declare states
  const [exitApp, setExitApp] = useState(0);

  // declare methods
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 3000); // 3 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(exitApp + 1);
      {
        Platform.OS !== 'ios' ? (
          RNToasty.Info({
            title: 'برای خروج دوبار کلیدبازگشت را فشاردهید',
            position: 'center',
          })
        ) : (
          <></>
        );
      }
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    console.log('usedouble');
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
      console.log('returndouble');
    };
  });

  return <></>;
}

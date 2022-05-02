import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Platform, BackHandler, View} from 'react-native';
import {RNToasty} from 'react-native-toasty';

export default function SearchResultBack({event}) {
  // declare methods
  const backAction = () => {
    event();
    console.log('backsearch');
    return true;
  };
  useEffect(() => {
    console.log('useeffect');
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
      console.log('return');
    };
  });

  return <></>;
}

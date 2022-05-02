import React from 'react';
import {View, Text} from 'react-native';
import {specificSize} from '../functions/styleFuncs';
import {XContainer, XSafeContainer, XText} from './XPublics';

export default function Tooltip(props) {
  const {text} = props;
  return (
    <View
      style={{
        width: specificSize(140, 170, 180),
        height: specificSize(60),
        backgroundColor: '#333',
        borderRadius: 5,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-end',
        alignSelf: 'center',
      }}>
      <XText color={'#fff'} light textAlign="center">
        {text}
      </XText>
      <View
        style={{
          width: 0,
          height: 0,
          top: -5,
          transform: [{rotate: '180deg'}],
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 20,
          borderRightWidth: 20,
          borderBottomWidth: 15,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#333',
        }}></View>
    </View>
  );
}

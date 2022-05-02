import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {XIcon, XText} from './XPublics';
import {colors} from '../styles/publicStyles';
import {specificSize} from '../functions/styleFuncs';

export default function BoxProfile({
  title,
  iconName,
  iconType,
  source,
  onPress,
  flip,
}) {
  return (
    <View>
      <View
        style={{
          width: specificSize(320, 360, 390),
          height: specificSize(70, 90, 110),
          backgroundColor: '#f1f1f1',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          marginVertical: 5,
          borderRadius: 15,
        }}>
        <TouchableOpacity
          activeOpacity={0.95}
          style={{
            borderRadius: 20,

            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}
          onPress={onPress}>
          <XIcon
            type={'awesome'}
            name={'chevron-left'}
            size={15}
            color={colors.muted}
          />
          <XText style={{paddingHorizontal: 15, flex: 1}}>{title} </XText>
          {source && (
            <FastImage
              ref={box}
              style={{width: 25, height: 25}}
              source={source}
              resizeMode={FastImage.resizeMode.contain}
            />
          )}
          <XIcon
            flip={flip}
            type={iconType}
            name={iconName}
            size={25}
            color={colors.muted}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

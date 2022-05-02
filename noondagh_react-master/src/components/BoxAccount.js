import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {XIcon, XText, XTextInput} from '../components/XPublics';
import {specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';
import {navigate} from '../functions/navFuncs';

export default function BoxAccount({
  label,
  details,
  imgSrc,
  secureTextEntry,
  onPress,
}) {
  return (
    <View>
      <View
        style={{
          width: specificSize('85%', 350, 400),
          height: specificSize(80, 90, 100),
          backgroundColor: '#f1f1f1',
          borderRadius: 10,
          justifyContent: 'center',
          alignSelf: 'center',

          paddingHorizontal: 8,
          marginVertical: 5,
        }}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.95}
          style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
          <View style={{justifyContent: 'center', width: 40}}>
            <XIcon
              onPress={onPress}
              name={'edit'}
              type={'feather'}
              size={25}
              color={colors.muted}
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
              }}>
              <XText style={{paddingTop: 10}} bold size={14}>
                {label}{' '}
              </XText>
              <XTextInput
                color={colors.muted}
                block
                disableErrText
                bgColor={'#f1f1f1'}
                style={{textAlign: 'right'}}
                editable={false}
                secureTextEntry={secureTextEntry}
                value={details}
              />
            </View>
            {imgSrc ? (
              <FastImage
                style={{
                  width: specificSize(50, 70, 80),
                  height: specificSize(50, 70, 80),
                  borderRadius: 50,
                }}
                source={imgSrc}
              />
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

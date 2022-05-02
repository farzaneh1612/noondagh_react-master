import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import {
  XButton,
  XContainer,
  XIcon,
  XSafeContainer,
  XText,
} from '../../components/XPublics';
import {navigate} from '../../functions/navFuncs';
import {colors} from '../../styles/publicStyles';

export default function Setting({navigation}) {
  return (
    <XSafeContainer>
      <Header title={'تنطیمات'} navigation={navigation} grayBack />
      <XContainer>
        <View>
          <TouchableOpacity onPress={() => navigate('Question')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginHorizontal: 20,
                borderBottomWidth: 0.25,
                borderBottomColor: colors.lightGray,
                height: 60,

                // marginVertical: specificSize(17, 21, 25),
              }}>
              <XIcon
                type={'awesome'}
                name={'chevron-left'}
                size={15}
                color={colors.muted}
              />
              <View style={{flex: 1}} />
              <XText size={14} style={{paddingHorizontal: 15}}>
                پرسش های متداول
              </XText>
              {/* <XButton
                // flip={source.iconName === 'ios-list-sharp'}
                width={25}
                height={25}
                iconRight={{
                  type: 'ion',
                  name: 'ios-help-circle-outline',
                  color: colors.gray,
                  size: 25,
                }}
              /> */}
              <Image
                source={require('../../assets/images/question.png')}
                style={{width: 30, height: 30, tintColor: colors.gray}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </XContainer>
    </XSafeContainer>
  );
}

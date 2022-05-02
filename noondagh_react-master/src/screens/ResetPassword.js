import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import {
  XButton,
  XContainer,
  XSafeContainer,
  XTextInput,
  XText,
} from '../components/XPublics';
import {navigate} from '../functions/navFuncs';
import {specificSize} from '../functions/styleFuncs';
import {colors} from '../styles/publicStyles';

export default function ResetPassword(props) {
  return (
    <XSafeContainer>
      <XContainer>
        <View style={{paddingHorizontal: 20}}>
          <Header
            title={'درخواست بازیابی رمز عبور'}
            navigation={props.navigation}
          />
          <XText
            style={{paddingHorizontal: 16, paddingBottom: 2}}
            lineHeight={30}
            textAlign={'right'}
            color={'#634800'}>
            شماره موبایل یا پست الکترونیکی خود را وارد کنید
          </XText>
          <XTextInput
            bordered
            editable={true}
            width={specificSize('100%', 350, 400)}
            rounded
            radius={10}
            textInputStyle={{backgroundColor: '#f1f1f1'}}
            placeholder={'شماره موبایل یا پست الکترونیکی'}
            textAlign={'right'}
          />
        </View>
      </XContainer>
      <XButton
        onPress={() => navigate('GetAuthenticationCode')}
        width={specificSize(300, 350, 400)}
        rounded
        radius={10}
        bgColor={colors.bgColorButton}
        label={{
          textAlign: 'center',
          text: 'ارسال درخواست',
          color: '#fff',
        }}
      />
    </XSafeContainer>
  );
}
